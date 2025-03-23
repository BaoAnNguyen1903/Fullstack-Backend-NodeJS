require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
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
app.use('/v1/api/', apiRoutes);

//anonimot function (() => {})viết sai chính tả rr nên viết cho đọc thôi
(async() => { //seftruning function 
  //test connection
  try {
    await connection();
    app.listen(port, hostname, () => {
    console.log(`backend zero app listening on port ${port}`)
  });
  } catch (error) {
    console.log(">>> Err connect to db: ", error);
  }
})()

