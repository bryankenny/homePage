// global variables
const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

let path = require('path')
const bodyParser = require("body-parser");

// website dummy data
let webSiteDB = {
  "Google": "http://www.google.com",
  "Lighthouse Labs": "http://www.lighthouselabs.ca",
  "Reddit": "http://www.reddit.com",
  "4chan": "http://www.4chan.org"
}

let sites = [
  "http://www.google.com",
  "http://www.lighthouselabs.ca",
  "http://www.reddit.com",
  "http://www.4chan.org"
]

var sitesArrObj = [];

// functions

function sayHello() {
  console.log("hello")
}

// function getURL() {
//   let newURL = req.body.longURL
//   console.log(newURL)
// }

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index.ejs', sayHello())
});

app.get('/urls/new', function(req, res) {
  res.render('new_url.ejs')
})

app.get('/prac', function(req, res) {
  res.render('index.ejs')
});

app.get("/sites.json", (req, res) => {
  res.json(sitesArrObj);
});

app.post("/prac", (req, res) => {
  let newURL = req.body.longURL
  sitesArrObj.push(newURL);
  console.log(sitesArrObj);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});