require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const fileUpload = require('express-fileupload');
const connection = require('./config/database');
const app = express(); // app express
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const { MongoClient } = require('mongodb'); // mongodb(driver) connect db

//config fileupload
//luu y: phai config phia tren route
//default options
app.use(fileUpload());

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
    //====================================================================//
    // kết nối bằng mongoose
    await connection();
    //====================================================================//
    
    //using mongodb(driver) to connect db
    //conection url
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);
    //Database name
    const dbName = process.env.DB_NAME;
    await client.connect();
    console.log('Connected successfully to sever');
    const db = client.db(dbName);
    const collection = db.collection('customers');
    // điểm mạnh của mongodb(driver) là lưu data vào db không theo model nên lưu trời lưu đất gì cx đc. Còn mongoose thông qua model nên phải đủ thuộc tính
    // collection.insertOne({'name': 'Bao an dep trai'})
    // collection.insertOne({'address': 'da nang', email: 'baoan@gmail.com'})

    // let a = await collection.findOne({address: 'da nang'});
    // console.log(">>>check a: ", a);
    
    //===================================================================//
    app.listen(port, hostname, () => {
    console.log(`backend zero app listening on port ${port}`)
  });
  } catch (error) {
    console.log(">>> Err connect to db: ", error);
  }
})()

