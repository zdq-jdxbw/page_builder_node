'use strict';

const Service = require('egg').Service;

class WorkSpaceService extends Service {

  async getData() {
    return await this.ctx.model.User.findAll();
  }
  async setData() {
    await this.ctx.model.User.create({
      name: 'zdq',
      account: '18718408774',
      password: '666666',
    });
    return 'ss';
  }
  async getDownloadTemp() {
    return '';
  }
}
module.exports = WorkSpaceService;
