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

// functions

function sayHello() {
  console.log("hello")
}

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

});

app.get("/sites.json", (req, res) => {
  res.json(webSiteDB);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});