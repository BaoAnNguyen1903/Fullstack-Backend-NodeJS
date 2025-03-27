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
    deleteDeleteCustomerAPI,
    deleteDeleteArrayCustomerAPI
} = require('../controller/customerController');
const {
    postCreateProject
} = require('../controller/projectController');

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
routerAPI.delete('/customers-many', deleteDeleteArrayCustomerAPI);

routerAPI.post("/projects", postCreateProject);

routerAPI.get('/info', (req, res) => { // req.query k cần khai báo thêm route và truyền động được nhiều datadata
    return res.status(200).json({
        data: req.query
    })
});

routerAPI.get('/info/:name/:address', (req, res) => { //req.params phải khai báo thêm route và k phù hợp vs truyền động nhiều data
    return res.status(200).json({ // truyền động ít data ví dụ như html get id để update hay delete
        data: req.params
    })
});

module.exports = routerAPI;