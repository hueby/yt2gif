var express = require('express');
app = express();
router = require('./router');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

router(app);

port = process.env.PORT || 8080;

app.listen(port);
module.exports = app;
console.log('Listening on localhost:' + port);
