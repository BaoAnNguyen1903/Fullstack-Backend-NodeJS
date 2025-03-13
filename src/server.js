require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const app = express() // app express
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config
configViewEngine(app);

//route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})