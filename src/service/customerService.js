const Customer = require("../model/customer");
const aqp = require('api-query-params');

const getAllCustomersService = async (limit, page, name, queryString) => {
    try {
        let result = null;  
        if (limit && page) {
            let offset = (page - 1) * limit;
            const { filter, skip } = aqp(queryString);
            delete filter.page; // page bị thừa vì FE sẽ gửi client sẽ truyền page lên để tính ra skip. nếu truyền page và thì sẽ hiểu là 1 thuộc tính và muốn query nên xóa
            result = await Customer.find({filter}).skip(offset).limit(limit).exec();//skip() là 1 hàm của mongoose .exec là 1 hàm thực thi đảm bảo đúng là 1 promise
        //queryString sẽ trả ra gtri chính xác nếu chúng t truyền như này name=baoan thì chính xác 100% là baoan k có thừa thiếu
        // nếu chúng t truyền name=/baoan/ thì tất cả thằng nào có chữ baoan sẽ được query
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