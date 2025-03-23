const express = require('express');
const {getUsersAPI} = require("../controller/apiController");

const routerAPI = express.Router();

routerAPI.get('/', (req, res) => {
    res.send("hello world api")
});

routerAPI.get('/abc', (req, res) => {
    res.status(200).json({
        data: 'helo world with api'
    })
});

routerAPI.get('/users', getUsersAPI);


module.exports = routerAPI;