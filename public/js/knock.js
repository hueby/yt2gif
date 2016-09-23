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

    var ytprefix = 'https://www.youtube.com/watch?v=';
    var ytid = self.yturl().replace(ytprefix, '');
    var url = '/getInfo/' + ytid;
    $.getJSON(url, null, function (results) {
      if (results.status === 200) {
        self.videoData({ start: '0:00', duration: '0' });
        self.result('Titel: "' + results.title + '"');
        self.duration('Dauer: ' + results.duration);
      } else {
        self.result('Invalid URL');
      }
    });
  };
};

ko.applyBindings(new appViewModel());

/*
 * var self = this;
 * self.firstName = ko.observable();
 * firstName is now a function/class (knockout things)
 * if I do now this: self.firstName = 'Dennis' firstname becomes a string
 * this is what we dont want to have, if firstName is observable
 * instead do this: self.firstName('Dennis');
 * */
