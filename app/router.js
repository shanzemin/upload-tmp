'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app

  const file = middleware.file('public/uploads/files')

  router.post('/upload', file, controller.home.upload)
};
