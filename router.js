
var express = require('express');
var _homeController = require('./controllers/_homeController');
var _videoController = require('./controllers/_videoController');

module.exports = function (app) {
  var apiRoutes = express.Router();
  
  apiRoutes.get('/', _homeController.index);

  apiRoutes.get('/getInfo/:url', _videoController.getInfo);
  apiRoutes.get('/getVideo', _videoController.getVideo);

  app.use('/', apiRoutes);
};
