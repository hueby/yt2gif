/*eslint no-console: 0*/

var express = require('express'), app = express(),  router = require('./router');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
router(app);

var port = process.env.PORT || 8080;

app.listen(port);
module.exports = app;
console.log('Listening on localhost:' + port);

/*var nock = require('nock');
/var youtube = nock('http://www.youtube.com').filteringPath(function() {
  return '/';
})
.get('/')
.reply(200, { status: 'nock works' });
//var youtube = nock('http://localhost:8080').get('/getInfo/?').reply(200, { status: 'nock works'});
console.log(youtube);*/

/**
 * nock("http://www.google.com")
    .filteringPath(function(path){
        return '/';
    })
    .get("/")
    .reply(200, "this should work?");

 * 
 */

