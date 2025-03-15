require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const app = express() // app express
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
//get the client
const mysql = require('mysql2');

//config
configViewEngine(app);

//route
app.use('/', webRoutes);

//test connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3007, //default: 3006 nhưng đang chạy db bằng docker nên chạy 3007
  user: 'root',
  password: "123456",
  database: 'hoidanit'
});

//querry
connection.query(
  'SELECT * FROM Users',
  function (err, results, fields) {
    console.log(">>> results= ", results);
    console.log(">>> fields= ", fields);
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
});