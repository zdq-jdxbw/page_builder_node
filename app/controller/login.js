'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {

  async checkAccountExist() {
    const { ctx } = this;
    const result = await ctx.service.login.checkAccountExist();

    if (result.length > 0) {
      ctx.body = false;
    } else { ctx.body = true; }
  }

  async checkLogin() {
    const { ctx, app } = this;
    const result = {
      code: 1,
      data: [],
      token: '',
    };
    const data = await ctx.service.login.checkAccount();
    if (data.length > 0) {
      const token = app.jwt.sign({
        userId: data[0].id,
        userName: data[0].name,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
      }, app.config.jwt.secret);
      result.code = 1;
      result.data = data;

      result.token = token;
    } else {
      result.code = 0;
      result.data = [];
    }
    ctx.body = result;
  }

  async createAccount() {
    const { ctx } = this;
    const result = await ctx.service.login.insertNewUser();
    ctx.body = result;
  }

  async checkToken() {
    const { ctx } = this;
    console.log(ctx.state.user);
  }
}

module.exports = LoginController;
