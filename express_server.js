// global variables

const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

const path = require('path')
const bodyParser = require("body-parser");

const db = require('./queries');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({extended: true}));

// Array added sites will live in

app.locals.sitesArrObj = [];

// routes

app.get('/', function (req, res) {
  res.render('index.ejs')
});

app.get('/register', function(req, res) {
  res.render('register.ejs')
})

app.get('/login', function(req, res) {
  res.render('login.ejs')
})

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);

app.get('/urls/new', function(req, res) {
  res.render('new_url.ejs')
})

app.get('/prac', function(req, res) {
  // res.render('index.ejs', showSites(sitesArrObj))
  res.send(app.locals.sitesArrObj);
});

app.get("/sites.json", (req, res) => {
  res.json(sitesArrObj);
});

app.post("/", (req, res) => {
  let newURL = req.body.longURL
  app.locals.sitesArrObj.push(newURL);
  res.redirect("/");
});

app.post('/users', db.createUser)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});