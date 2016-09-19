const
  express = require('express');
var mustache = require('mustache-express');
var bodyParser = require('body-parser');
var app = express();

//set the app engine to mustache. One can also cache this later on,
app.engine('mustache',mustache());

//support JSON encoded bodies
app.use(bodyParser.json());

//support URL encoded entities
app.use(bodyParser.urlencoded({
  extended: true
}));

//set the view engine, and the view paths (so we can render them).
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/',function(req,res) {
  res.render('index');
});


app.post('/timetable',function(req,res) {
  res.send('timetable');
});


app.listen(3000);
