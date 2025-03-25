const express = require('express');
const {
    getUsersAPI,
    postCreateUserAPI, 
    putUpdateUserAPI, 
    deleteDeleteUserAPI, 
    postUploadSingleFileAPI, 
    postUploadMultipleFilesAPI
} = require("../controller/apiController");
const {
    postCreateCustomerAPI,
    postCreateArrayCustomerAPI,
    getAllCustomersAPI,
    putUpdateCustomerAPI,
    deleteDeleteCustomerAPI
} = require('../controller/customerController');

const routerAPI = express.Router();

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteDeleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI);
routerAPI.post('/files', postUploadMultipleFilesAPI);

routerAPI.get('/customers', getAllCustomersAPI);
routerAPI.post('/customers', postCreateCustomerAPI);
routerAPI.post('/customers-many', postCreateArrayCustomerAPI);
routerAPI.put('/customers', putUpdateCustomerAPI);
routerAPI.delete('/customers', deleteDeleteCustomerAPI);


module.exports = routerAPI;