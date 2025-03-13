const express = require('express')
const path = require('path')

require('dotenv').config()

console.log(">>> check env: ", process.env)

const app = express() // app express
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;


//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', './ejs')

//config static files
app.use(express.static(path.join(__dirname, 'public')));

//Khai báo router
app.get('/', (req, res) => {
  res.send('Hello World! and bao an dep trai')
})

app.get('/baoan', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})