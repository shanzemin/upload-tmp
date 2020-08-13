'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async upload() {
    const { ctx } = this
    ctx.body = ctx.request.files
  }
}

module.exports = HomeController;
