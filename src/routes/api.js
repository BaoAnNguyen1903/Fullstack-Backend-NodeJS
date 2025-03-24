const express = require('express');
const {getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteDeleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI} = require("../controller/apiController");

const routerAPI = express.Router();

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteDeleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);
routerAPI.post('/files', postUploadMultipleFilesAPI);

module.exports = routerAPI;