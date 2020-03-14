'use strict';

module.exports = () => {
  return async function gzip(ctx, next) {
    await next();
    ctx.set('Content-Encoding', 'gzip');
  };
};
