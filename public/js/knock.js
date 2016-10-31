//https://www.youtube.com/watch?v=Rdl-iHX9ZaY

var appViewModel = function () {
  var self = this;

  self.yturl = ko.observable('');
  self.result = ko.observable();
  self.duration = ko.observable();

  self.videoData = ko.observable();

  self.fetch = function () {
    self.videoData(null);
    self.result('');
    self.duration('');

    var ytprefix = 'http://www.youtube.com/watch?v=';
    var ytid = self.yturl().replace(ytprefix, '');
    var url = '/getInfo/' + ytid;
    $.getJSON(url, null, function (results) {
      switch (results.status) {
      case 200:
        self.videoData({ start: '0:00', duration: '0' });
        self.result('Titel: "' + results.title + '"');
        self.duration('Dauer: ' + results.duration);
        break;
      default:
        self.result('Invalid URL');
        break;
      }
    });
  };
};

ko.applyBindings(new appViewModel());
