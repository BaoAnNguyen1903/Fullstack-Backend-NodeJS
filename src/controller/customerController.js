const {uploadSingleFile} = require("../service/fileService");
const {createCustomerService, createArrayCustomerService} = require("../service/customerService");

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
    }
}