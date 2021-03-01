'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.getData);
  router.get('/setData', controller.home.setData);
  router.post('/downloadTemp', controller.template.downloadTemp);

  router.post('/checkAccountExist', controller.login.checkAccountExist);
  router.post('/register', controller.login.createAccount);
  router.post('/login', controller.login.checkLogin);
  router.post('/saveTemplate', controller.template.saveTemplate);
  router.get('/getTempsById/:userId', controller.template.getTempsById);
  router.get('/checkToken', jwt, controller.login.checkToken);
};
