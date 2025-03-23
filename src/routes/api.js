const express = require('express');
const {getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteDeleteUserAPI} = require("../controller/apiController");

const routerAPI = express.Router();

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteDeleteUserAPI);

module.exports = routerAPI;