const
  express = require('express');
var mustache = require('mustache-express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

//connect to the database: database path should be in config
var databaseURL = "mongodb://localhost:27042/database_name";

mongoose.connect(databaseURL);
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

//GET REQUESTS:
app.get('/',function(req,res) {
  res.render('index');
});


//POST REQUESTS (AUTOMATIC)
app.post('/timetable',function(req,res) {
  res.send('timetable');
});

//METHODS:


app.listen(3000);
