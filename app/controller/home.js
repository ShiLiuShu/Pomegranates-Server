'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello shiliuwu';
  }

  async test() {
    const { ctx } = this;
    ctx.body = 'hello Errorccccc';
  }
}

module.exports = HomeController;
