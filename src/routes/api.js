const express = require('express');
const {getUsersAPI, postCreateUserAPI} = require("../controller/apiController");

const routerAPI = express.Router();

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);

module.exports = routerAPI;