/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1614002701283_1017';

  // add your middleware config here
  config.middleware = [];

  config.jwt = {
    secret: 'jdxbw_token',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    sequelize: {
      dialect: 'mysql',
      host: '127.0.0.1',
      protL: '3306',
      username: 'root',
      password: 'root',
      database: 'page_builder_db',
    },
    security: {
      csrf: {
        enable: true,
        headerName: 'x-csrf-token',
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
