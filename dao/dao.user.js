var util = require('util');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var config = require('../config/config.js')();

exports.connect = function (callback) {
  mongoose.connect(config.db_url);
};

exports.disconnect = function (callback) {
  mongoose.disconnect(callback);
};

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('open');
});

var kittySchema = mongoose.Schema({
  name: String,
  age: String
});

kittySchema.methods.speak = function () {
  var greeting = this.name ? "Meow name is" + this.name : "I don't have a name";
  console.log(greeting);
};

var kittenModel = mongoose.model('Kitten', kittySchema);

exports.add = function(name,age,callback) {
  var kittenEntity  = new kittenModel({name: name, age: age});
  kittenEntity.save(function(err){
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};











