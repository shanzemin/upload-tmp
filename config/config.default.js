/* eslint valid-jsdoc: "off" */

'use strict'

const path = require('path')
const os = require('os')

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1597303995401_8773'

  // add your middleware config here
  config.middleware = []

  config.multipart = {
    fileSize: '500mb',
    fieldSize: '500kb',
    mode: 'file',
    tmpdir: path.join(os.tmpdir(), 'egg-multipart-tmp', appInfo.name),
    cleanSchedule: {
      cron: '0 30 4 * * *'
    },
    fileExtensions: ['.txt', '.pdf', '.xlsx', '.xls', '.doc', '.docx', '.ppt', '.pptx']
  }

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    }
  }

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig
  }
};
