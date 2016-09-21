express = require('express');
_homeController = require('./controllers/_homeController');
_videoController = require('./controllers/_videoController');

module.exports = function (app) {
  apiRoutes = express.Router();
  
  apiRoutes.get('/', _homeController.index);
  apiRoutes.get('/getInfo/:url', _videoController.getInfo);
  apiRoutes.get('/getVideo', _videoController.getVideo);

  app.use('/', apiRoutes);
};
