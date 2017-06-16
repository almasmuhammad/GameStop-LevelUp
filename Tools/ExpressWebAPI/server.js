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


var users = [
  {"fullName" : "john doe", "employeeId": '12345', "userId":1},
  {"fullName" : "jane dow", "employeeId": '22345', "userId":2},
  {"fullName" : "Ashok Kumar", "employeeId": '32345', "userId":3}];


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

app.get('/api/MissionAudience/Users/:query', function (req, res) {
  if(req.params.query) {
     res.json(users.filter(function(m){return m.fullName.toLowerCase().indexOf(req.param.query.toLowerCase()) > -1 || m.employeeId.indexOf(req.param.query) > -1}));
  }
});

app.get('/api/user/userinfo', function(req, res){
  var data = {"firstName": "Almas",
        "lastName": "24K",
        "level": 17,
        "currentXp": 75,
        "upperThreshold": 100,
        "percentageComplete": "0.5",
        "rank": "EPIC",
        "hireDate": null};

    var stop = new Date().getTime();
    while(new Date().getTime() < stop + timeoutDelay) {
        var k=1;
    }

  res.json(data);
});

var missions = [
  {"missionId":1, "missionName":"XBOX 462", "badgeImagePath":"https://www.fillmurray.com/200/300","description":"descript mission stuff","allowRating":true, "allowPoints":false,"allowDoubleXP":false,"allowReleaseNotifications":true,"allowUpdatedNotifications":false},
  {"missionId":2, "missionName":"PLAYSTATION 242", "badgeImagePath":"https://www.fillmurray.com/200/300","description":"descript mission stuff","allowRating":false, "allowPoints":true,"allowDoubleXP":false,"allowReleaseNotifications":true,"allowUpdatedNotifications":false}
];

app.get('/api/missioncreation', function(req,res) {
  sleep(timeoutDelay);
  res.json(missions);
});
app.get('/api/missioncreation/:id', function(req,res) {
  sleep(timeoutDelay);
  if(req.params.id) {
    var mission = missions.filter(function(m){return m.missionId === +req.params.id});
    if (mission && mission[0]) res.json(mission[0])
    else res.status(404).end();
  }
});
app.put('/api/missioncreation', jsonParser, function(req, res) {
  sleep(timeoutDelay);
  var body = req.body;
  var id = null;
  if (body.missionId === null) {
    id = maxMissionId() + 1;
    console.log(id);
    body.missionId = id;
    missions.push(body);
  } else {
    // update
    var index = missions.findIndex(function(m){return m.missionId === +body.missionId});
    if (index < 0) {
      res.status(404).end();
    }
    missions[index] = body;
  }

  res.json(id);
});

var groups = [{"groupId":1, "groupName":"Group 1"},
  {"groupId":2, "groupName":"Group 2"},
  {"groupId":3, "groupName":"Group 3"},
  {"groupId":4, "groupName":"Group 4"}];


app.get('/api/MissionAudience/Groups/:query', function(req,res) {
    sleep(timeoutDelay);
  if(req.params.query) {
    var results = groups.filter(function(m){return m.groupName.toLowerCase().indexOf(req.params.query) > -1});
    res.json(results);
  }
  res.json(groups);
});
app.get('/api/MissionAudience/Groups/', function(req,res) {
    sleep(timeoutDelay);
  res.json(groups);
});

var missionGroups = [
  { "missionId":3, "groupId":1, "groupName":"Group 1" },
  { "missionId":3, "groupId":2, "groupName":"Group 2" },
  { "missionId":4, "groupId":3, "groupName":"Group 3" },
  { "missionId":5, "groupId":4, "groupName":"Group 4" }];
// app.get('/api/missiongroup/:id', function(req, res) {
//   res.json(missionGroups.filter(function(m){return m.missionId === +req.params.id}));
// });

var missionUsers = [
  {"missionId":3, "userId":1, "userName":"user 1"},
  {"missionId":3, "userId":2, "userName":"user 2"}];

// app.get('/api/missionuser/:id', function(req, res) {
//   res.json(missionUsers.filter(function(m){return m.missionId === +req.params.id}));
// });

app.get('/api/MissionAudience/:id', function(req,res) {
    sleep(timeoutDelay);
  var groups = missionGroups.filter(function(m){return m.missionId === +req.params.id});
  var users =  missionUsers.filter(function(m){return m.missionId === +req.params.id});
  res.json({"groups": groups, "users": users});
});
app.put('/api/Mission/:id/Audience', function(req,res) {
  // save to mission audience groups and users
  res.status(200).end();
});

var customCats = [
  {"categoryId":1, "categoryName":"custom cat 1"},
  {"categoryId":2, "categoryName":"custom cat 2"}];

app.get('/api/customcategory', function(req,res) {
    sleep(timeoutDelay);
  res.json(customCats);
});

var cats = [
  {"categoryId":3, "categoryName":"cat abc"},
  {"categoryId":4, "categoryName":"cat xyz"},
  {"categoryId":5, "categoryName":"cat qwert"},
  {"categoryId":6, "categoryName":"cat yuio"}];
app.get('/api/category', function(req, res){
  res.json(cats);
});

app.get('/api/category/:query', function(req, res){
    sleep(timeoutDelay);
  if(req.params.query) {
    var results = cats.filter(function(m){return m.categoryName.toLowerCase().indexOf(req.params.query) > -1});
    res.json(results);
  }
  res.json([]);
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