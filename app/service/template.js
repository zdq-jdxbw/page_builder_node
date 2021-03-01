'use strict';

const Service = require('egg').Service;
const { getLastHtmlString } = require('../utils');

class TemplateService extends Service {

  async insertTemp() {
    const { ctx } = this;
    const value = ctx.request.body.data;
    const result = await ctx.model.Template.create({
      userId: value.userId,
      content: value.content,
      tempName: value.tempName,
    });
    return result;
  }
  async selectTempsById() {
    const { ctx } = this;
    const value = ctx.params.userId;
    const result = await ctx.model.Template.findAll({
      where: {
        userId: value,
      },

    });
    return result;
  }

  async beforeDownload() {
    const { ctx } = this;
    const value = ctx.request.body.data;
    const result = await getLastHtmlString(value, 'center_content', 'contextmenu');
    return result;
  }


}
module.exports = TemplateService;
