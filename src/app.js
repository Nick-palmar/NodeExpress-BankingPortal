const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// read the account data from a file to a js object
const accountData = fs.readFileSync("src/json/accounts.json", { encoding: "utf8"});
const accounts = JSON.parse(accountData);

// read the user data from a file to a js object
const userData = fs.readFileSync("src/json/users.json", { encoding: "utf8"});
const users = JSON.parse(userData);

app.get('/', (req, res) => {
    res.render("index", {title: 'Account Summary', accounts: accounts});
  });

app.listen(3000, () => {
    console.log('PS Project Running on port 3000!');
})