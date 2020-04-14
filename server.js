var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

var db = mongo.connect("mongodb://localhost:27017/angular", function(err, response) {
  if (err){ console.log(err); }
  else{ console.log('Connected to ' + db, ' + ', response); }
})

var app = express();
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})

var Schema = mongo.Schema;

var CasesSchema = new Schema({
  id: {type: Number },
  name: {type: String },
  dateObs: {type: Date },
  dept: {type: String },
  classe: {type: String },
  dateMaJ: {type: Date },
},{ versionKey: false });

var model = mongo.model('cases', CasesSchema, 'ufo');

app.get("/api/getCases", function(req, res) {
  model.find({}, function(err, data) {
    if (err) {
      res.send(err);
    }
    else {
      res.send(data);
    }
  });
})

app.listen(8080, function() {
  console.log('Example app listening on port 8080!');
})
