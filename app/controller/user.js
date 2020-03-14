'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async add() {
    const { name } = this.ctx.query;
    console.log('name', name);
    this.ctx.body = await this.ctx.service.user.add(name);
  }
}

module.exports = UserController;
