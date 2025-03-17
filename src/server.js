require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const connection = require('./config/database')
const app = express() // app express
const mongoose = require('mongoose');

// config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config
configViewEngine(app);

//route
app.use('/', webRoutes);

const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);
const cat = new Kitten({ name: 'bao an cat' });
cat.save();
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

