const Customer = require("../model/customer");

const getAllCustomersService = async (limit, page, name) => {
    try {
        let result = null;  
        if (limit && page) {
            let offset = (page - 1) * limit;
            if (name) {
                result = await Customer.find(
                    {
                        "name": { $regax: '.*' + name + '.*'}
                    }
                ).skip(offset).limit(limit).exec();
            } else
            result = await Customer.find({}).skip(offset).limit(limit).exec();//skip() là 1 hàm của mongoose .exec là 1 hàm thực thi đảm bảo đúng là 1 promise
        } else {
            result = await Customer.find({});
        }
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

const deleteDeleteCustomerService = async (customerId) => {
    try {
        // let result = await Customer.deleteOne({_id: customerId}); đây là xóa luôn trong db
        let result = await Customer.deleteById(customerId); // đây là tạo thêm trường true false. hàm này là của mongoose-delete
        return result;
    } catch (error) {
        console.log(">>>check err: ", error);
        return null;
    }
}

const deleteDeleteArrayCustomerService = async (arrCustomersId) => {
    try {
        let result = await Customer.delete({_id: {$in: arrCustomersId}}); // $in  là 1 toán tử xóa những phần tử trong arr
        return result;
    } catch (error) {
        console.log(">>>check err: ", error);
        return null;
    }
}

module.exports = {
    getAllCustomersService,
    putUpdateCustomerService,
    createCustomerService,
    createArrayCustomerService,
    deleteDeleteCustomerService,
    deleteDeleteArrayCustomerService
}