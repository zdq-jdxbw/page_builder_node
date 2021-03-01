'use strict';

const Service = require('egg').Service;

class WorkSpaceService extends Service {

  async checkAccountExist() {
    const { ctx } = this;
    const value = ctx.request.body.data;
    const result = await ctx.model.User.findAll({
      where: {
        account: value,
      },
    });
    return result;
  }

  async insertNewUser() {

    const { ctx } = this;
    const { account, password, username } = ctx.request.body.data;
    const result = await ctx.model.User.create({
      name: username,
      account,
      password,
    });
    return result;
  }
  async checkAccount() {

    const { ctx } = this;
    const { account, password } = ctx.request.body.data;

    const result = await ctx.model.User.findAll({
      where: {
        account,
        password,
      },
    });
    return result;
  }
}
module.exports = WorkSpaceService;
