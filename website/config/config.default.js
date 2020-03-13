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
  config.keys = appInfo.name + '_1584080785433_7809';

  // add your middleware config here
  config.middleware = [];
  //
  config.view={
    mapping:{
      '.html':'nunjucks'
    }
  };

  config.cluster={
    listen:{
      port:3003,
      hostname:'127.0.0.1',
      https:{
        key:'/etc/ssl/key.pem',
        cert:'/etc/ssl/cert.pem',
      }
    }
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
