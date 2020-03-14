'use strict';

const Service = require('egg').Service;
class UserService extends Service {
  async add(name) {
    const { ctx } = this;
    const result = await ctx.model.User.create({
      userName: name,
    });
    return result;
  }
}
module.exports = UserService;
