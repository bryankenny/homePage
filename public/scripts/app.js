// global variables
const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

const childElement = '';
const appendChildElement = '';
const parentElement = '';

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

const sitesArrObj = [];

// functions

function sayHello() {
  console.log("hello")
}

// function listSites() {
//   var parentElement = document.getElementById('siteList');
//   for (let site of sitesArrObj) {
//     childElement = document.createElement('div');
//     appendChildElement = parentElement.appendChild(childElement)
//     appendChildElement.innerHTML = site.url
//   }
// }

// routes

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

app.post("/", (req, res) => {
  let newURL = req.body.longURL
  sitesArrObj.push(newURL);
  console.log(sitesArrObj);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});