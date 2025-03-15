require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const app = express() // app express
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const connection = require('./config/database')

//config
configViewEngine(app);

//route
app.use('/', webRoutes);

//querry
connection.query(
  'SELECT * FROM Users',
  function (err, results, fields) {
    console.log(">>> results= ", results);
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
});