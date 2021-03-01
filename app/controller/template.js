'use strict';

const Controller = require('egg').Controller;

class TempController extends Controller {


  async saveTemplate() {
    const { ctx } = this;
    const result = await ctx.service.template.insertTemp();
    ctx.body = result;
  }
  async getTempsById() {
    const { ctx } = this;
    const result = await ctx.service.template.selectTempsById();
    ctx.body = result;
  }

  async downloadTemp() {
    const { ctx } = this;
    const result = await ctx.service.template.beforeDownload();
    ctx.body = result;
  }
}

module.exports = TempController;
