/*
Express web service to stub out dependent web API service.
Run npm install before running (npm start) from root of package.json
 */

var express = require('express');
var cors = require('cors');
var fs = require('fs'); 
var multer = require('multer');
var bodyParser = require('body-parser');
var app = express();
var timeoutDelay = 2000;

var DIR = './uploads/';
var upload = multer({dest: DIR});

//app.use(bodyParser.json({ type: 'application/json' }))
app.use(cors());
//app.use(express.bodyParser());
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var missions = [];
missions.push(
  JSON.parse(`{"missionId":1, "missionName":"XBOX 462", "badgeImagePath":"https://www.fillmurray.com/200/300","description":"descript mission stuff","allowRating":true, "allowPoints":false,"allowDoubleXP":false,"allowReleaseNotifications":true,"allowUpdateNotifications":false}`));
missions.push(
  JSON.parse(`{"missionId":2, "missionName":"PLAYSTATION 242", "badgeImagePath":"https://www.fillmurray.com/200/300","description":"descript mission stuff","allowRating":false, "allowPoints":true,"allowDoubleXP":false,"allowReleaseNotifications":true,"allowUpdateNotifications":false}`));


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

app.get('/api/missioncreation', function(req,res) {
  sleep(timeoutDelay);
  res.json(missions);
});

app.get('/api/missioncreation/:id', function(req,res) {
  sleep(timeoutDelay);
  if(req.params.id) {
    var mission = missions.filter(function(m){return m.missionId === +req.params.id});
    if (mission) res.json(mission)
    else res.status(404).end();
  }
});

app.put('/api/missioncreation', jsonParser, function(req, res) {
  var body = req.body;
  var id = null;
  if (body.missionId === null) {
    id = maxMissionId() + 1;
    console.log(id);
    body.missionId = id;
    missions.push(body);
  } else {
    // update
    var editMission = missions.filter(function(m){return m.missionId === +body.missionId});
    if (editMission.length === 0) {
      res.status(404).end();
    }
    editMission = body;
  }

  res.json(id);
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
  res.status(401).end();
});

var server = app.listen(65495, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Web app listening on http://%s:%s", host, port);
});

function sleep(time){
  if(!time) time = 3000;
  var stop = new Date().getTime();  while(new Date().getTime() < stop + time) {var k=1;}
}

function maxMissionId() {
  return Math.max.apply(Math, missions.map(function(m){return m.missionId}));
}