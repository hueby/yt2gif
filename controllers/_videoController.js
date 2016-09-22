youtubedl = require('youtube-dl');
exports.getInfo = function(req, res, next) {
  var url = 'https://www.youtube.com/watch?v=' + req.params.url;
  youtubedl.getInfo(url, [],  function(err, info) {
    if (err) {
      res.json({
        status: 404,
        title: "Not found",
        duration: "Invalid URL"
      });
    } else {
      res.status(200).json({
        status: 200,
        title: info.title,
        duration: getDuration(info.duration)
      });
    }
  });
};

// check if seconds are well formatted
function getDuration(duration) {
  exp = duration.split(':');
  return (exp[1].length === 1 ? exp[0] + ':0' + exp[1] : duration);
}

exports.getVideo = function(req, res, next) {
  res.status(404);
};
