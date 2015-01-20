module.exports = function(root,params){
  var userDb = require('../dao/dao.user.js');
  var name = params.name || 'undefind';
  var age  = params.age || 'undefind';
  userDb.add(name,age, function (err, row) {
        if (err) {
            return next(err);
        } else {
          console.log('success');
        }
    });
  root.body = 'name=' + name +',age=' + age + ': save success' ;
};