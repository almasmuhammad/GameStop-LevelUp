/*
Express web service to stub out dependent web API service.
Run npm install before running (npm start) from root of package.json
 */

var express = require('express');
var cors = require('cors');
var fs = require('fs'); 
var multer = require('multer');
var app = express();
var timeoutDelay = 1000;

var DIR = './uploads/';
 
var upload = multer({dest: DIR});

app.use(cors());


var users = JSON.parse(`{
"user1" : {
    "name" : "mahesh",
    "password" : "password1",
    "profession" : "teacher",
    "id": 1
  },
  "user2" : {
    "name" : "suresh",
    "password" : "password2",
    "profession" : "librarian",
    "id": 2
  },
  "user3" : {
    "name" : "ramesh",
    "password" : "password3",
    "profession" : "clerk",
    "id": 3
  }
}`);

// -------  Routes for API  -----------
app.post('/api', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }
 
    res.end('File is uploaded');
  });
});

app.get('/', function(req, res){
  res.send('<html><body>api help<br/>' +
  'users/</body></html>');
});

app.get('/users/',function(req,res){
  console.log('route request - users');
        res.json(users);
});
app.get('/users/:id', function (req, res) {
  console.log('route request - users/id');
  if(req.params.id) {
    var user = users["user" + req.params.id];
    if(user){
      res.json(user);
    }
    else{
      res.status(404).end();
    }
  }
});

app.get('/api/user/userinfo', function(req, res){

var data = JSON.parse(`{"firstName": "Almas",
        "lastName": "24K",
        "level": 17,
        "currentXp": 75,
        "upperThreshold": 100,
        "percentageComplete": "0.5",
        "rank": "EPIC",
        "hireDate": null}`);

    var stop = new Date().getTime();
    while(new Date().getTime() < stop + timeoutDelay) {
        var k=1;
    }

  res.json(data);
});

app.post('/api/login', function(req, res){
  sleep(timeoutDelay);
  res.cookie('accessToken','x');
  res.redirect('http://localhost:4200');
});

app.get('/api/login', function(req, res){

  res.cookie('accessToken','x');
  res.redirect('http://localhost:4200');
});

app.get('/api/Application/Profile', function (req,res){
    sleep(timeoutDelay);

  var applicationProfileViewModel = JSON.parse('{"roles":["CreatorRead"],"languages":["en-us"]}');

  res.json(applicationProfileViewModel);
});

app.get('/unauth',function (req, res){
  console.log('route request - unauth');
  res.status(401).end();});

var server = app.listen(65495, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Web app listening on http://%s:%s", host, port);
});

function sleep(time){
  if(!time) time = 3000;
  var stop = new Date().getTime();  while(new Date().getTime() < stop + time) {var k=1;}
}