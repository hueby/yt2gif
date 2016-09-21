var appViewModel = function () {
  var self = this;

  self.yturl = ko.observable("");
  self.result = ko.observable(); 
  self.duration = ko.observable();

  self.fetch = function () {
    ytprefix = 'https://www.youtube.com/watch?v=';
    if(self.yturl().includes(ytprefix, 0)) { 
      var ytid = self.yturl().replace(ytprefix, '');
      var url = '/getInfo/' + ytid;
      $.getJSON(url, null, function(results) {
          self.result(results.title);
          self.duration(results.duration);
      });
    } else {
      self.result("Enter valid YouTube URL");
      self.duration("");
    }
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
