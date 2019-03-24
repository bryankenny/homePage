// global variables
const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

let path = require('path')
const bodyParser = require("body-parser");

// website dummy data

let sitesArrObj = [];

// functions

function sayHello() {
  console.log("hello")
}

function showSites(array) {
  for (var i=0; i<array.length; i++) {
    console.log(array[i])
  }
  return array[i];
}

// routes

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  var test = "this is a test";
  res.render('index.ejs', sayHello())
});

app.get('/urls/new', function(req, res) {
  res.render('new_url.ejs')
})

app.get('/prac', function(req, res) {
  // res.render('index.ejs', showSites(sitesArrObj))
  res.send(sitesArrObj);
});

app.get("/sites.json", (req, res) => {
  res.json(sitesArrObj);
});

app.post("/", (req, res) => {
  let newURL = req.body.longURL
  sitesArrObj.push(newURL);
  console.log(sitesArrObj);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});