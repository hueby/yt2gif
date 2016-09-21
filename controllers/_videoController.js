youtubedl = require('youtube-dl');
exports.getInfo = function(req, res, next) {
  var url = 'https://www.youtube.com/watch?v=' + req.params.url;
  youtubedl.getInfo(url, [],  function(err, info) {
    if (err) {
      res.json({
        title: "Not found",
        duration: "Invalid URL"
      });
    } else {
      res.status(200).json({
        title: info.title,
        duration: info.duration
      });
    }
  });
};

exports.getVideo = function(req, res, next) {
  res.status(404);
};
