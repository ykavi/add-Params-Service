const express = require('express');
const app = express();
const bp = require('body-parser');
const sql = require('mssql');
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(bp.urlencoded({ extended: true }));
const login = require("./dbOperations");
const port = process.env.PORT || 3000;
server = app.listen(port);
console.log(`Example app listening on port ${port}* !`);



app.get('/:sicaklik/:nem/:karbondioksit',login.addParams);
app.get('/', function (req, res) {
    res.render('home');
  })
  
  




