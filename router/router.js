module.exports = function(app){
  var router = require('koa-router');
  var querystring = require('querystring');
  var controllerAddUser = require('../controller/controller.addUser.js');
  app.use(router(app));
  /* jshint esnext: true */
  app.get('/users', function *(next) {
    var content = this.req;
    this.body ='123';
  });
  app.get('/addUser', function *(next) {
    if (!this.req._parsedUrl.query) {
      this.body = "参数错误";
      return;
    }
    var params = querystring.parse(this.req._parsedUrl.query);
    controllerAddUser(this,params);
  });
  app.get('/test?name=:name&age=:age', function *(next) {
    this.body = JSON.stringify(this,null,'\t');
  });
};