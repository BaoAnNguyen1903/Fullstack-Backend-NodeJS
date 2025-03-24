const mongoose = require('mongoose');

//shape data (định dạnh dữ liệu)
// mongoose bắt phải thông qua Schema để khai báo dữ liệu giúp ràng buộc dữ liệu chặt chẽ hơn
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
},
    // createAt: Date, updateAt: Date. mongoose đã làm cho chúng tata
    {timestamps: true} // chỉ cần như này là sẽ có 2 trường createAt: Date, updateAt: Date
);

const Customer = mongoose.model('customer', customerSchema);//'user' là tên trong db, mongo sẽ tự động thêm s thành users

module.exports = Customer;
 