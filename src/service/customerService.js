const Customer = require("../model/customer");

const getAllCustomersService = async () => {
    try {
        let result = await Customer.find({});
        return result;
    } catch (error) {
        console.log(">>>check err: ", error)
        return null;
    }
}

const putUpdateCustomerService = async (name, address, phone, email, description, customerId) => {
    try {
        let result = await Customer.updateOne({_id: customerId}, {name, address, phone, email, description, customerId});
        return result;
    } catch (error) {
        console.log(">>>check err: ", error);
        return null;
    }
}

const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name, 
            address: customerData.address, 
            phone: customerData.phone, 
            email: customerData.email, 
            description: customerData.description, 
            image: customerData.image
        })
        return result;
    } catch (error) {
        console.log(error)
        return null;
    }
}

const createArrayCustomerService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result;
    } catch (error) {
        console.log(">>>err: ", error);
        return null;
    }
}

module.exports = {
    getAllCustomersService,
    putUpdateCustomerService,
    createCustomerService,
    createArrayCustomerService
}