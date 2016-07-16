var mongoose = require('mongoose');
var model = require('./model');
//连接数据库
mongoose.connect('mongodb://123.57.143.189/201605chat');
//根据schema定义模型
exports.User = mongoose.model('User',model.User);