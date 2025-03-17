require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const connection = require('./config/database')
const app = express() // app express

// config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config
configViewEngine(app);

//route
app.use('/', webRoutes);

//test connection
connection();

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
});