var koa = require('koa');
var staticFiles = require('koa-static');
var path = require('path');
var app = koa();
var userDao = require('./dao/dao.user.js');

//==========载入路由模块
require('./router/router')(app);

//==========载入静态资源
app.use(staticFiles(path.join(__dirname, 'static'), {
  maxAge: 365 * 24 * 60 * 60
}));

//==========链接数据库
userDao.connect(function(error){
  if (error) {
    throw errow;
  }
});

app.on('close',function(error){
  userDao.disconnect(function(err){

  });
});


module.exports = app;