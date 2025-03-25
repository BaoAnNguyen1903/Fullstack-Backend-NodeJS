const {uploadSingleFile} = require("../service/fileService");
const {createCustomerService, createArrayCustomerService, getAllCustomersService, putUpdateCustomerService, deleteDeleteCustomerService} = require("../service/customerService");

// object phai co {key: value}
module.exports = {
    postCreateCustomerAPI : async (req, res) => {
        // destructing object js
        let {name, address, phone, email, description} = req.body;
        let imageUrl = "";
        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        } else {
            let results = await uploadSingleFile(req.files.image);
            imageUrl = results.path; // cần đường link này để lưu vào db
        }
        let customerData = {
            name, 
            address, 
            phone, 
            email, 
            description, 
            image: imageUrl
        }
        let customer = await createCustomerService(customerData);
        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },
    
    postCreateArrayCustomerAPI : async (req, res) => {
        let customers = await createArrayCustomerService(req.body.customers);
        if (customers) { //customers có s là do tên trong postman đặt là customers để test
            return res.status(200).json({
                EC: 0,
                data: customers
            })
        } else {
            return res.status(200).json({
                EC: -1,
                data: customers
            })
        }
    },

    getAllCustomersAPI : async (req, res) => {
        let limit = req.query.limit;
        let page = req.query.page;
        let name = req.query.name;
        let customers = null;

        if (limit && page) {
            customers = await getAllCustomersService(limit, page, name);
        } else 
            customers = await getAllCustomersService();
            
        return res.status(200).json(
            {
                EC: 0,
                data: customers
            }
        )
    },

    putUpdateCustomerAPI : async (req, res) => {
        let {name, address, phone, email, description, customerId} = req.body;
        let customer = await putUpdateCustomerService(name, address, phone, email, description, customerId);
        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },

    deleteDeleteCustomerAPI : async (req, res) => {
        let customerId = req.body.customerId;
        let result = await deleteDeleteCustomerService(customerId)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    deleteDeleteArrayCustomerAPI : async (req, res) => {
        let customersId = req.body.customersId;
        let result = await deleteDeleteArrayCustomerService(req.body.customers);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}