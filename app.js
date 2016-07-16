var express = require('express');
var path = require('path');
var app = express();
//把app目录作为静态文件根目录
app.use(express.static(path.resolve('app')));
//把public目录作为静态文件根目录
app.use(express.static(path.resolve('public')));
