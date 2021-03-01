'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getData() {
    const { ctx } = this;
    ctx.body = await ctx.service.workspace.getData();
  }
  async setData() {
    const { ctx } = this;
    ctx.body = await ctx.service.workspace.setData();
  }
  async getDownloadTemp() {
    const { ctx } = this;
    ctx.body = await ctx.service.workspace.getDownloadTemp();
  }
}

module.exports = HomeController;
