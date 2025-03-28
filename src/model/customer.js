const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

//shape data (định dạnh dữ liệu)
// mongoose bắt phải thông qua Schema để khai báo dữ liệu giúp ràng buộc dữ liệu chặt chẽ hơn
const customerSchema = new mongoose.Schema(
    {
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
    {
        timestamps: true, // chỉ cần {timestamps: true} là sẽ có 2 trường createAt: Date, updateAt: Date
        // static method. Giống repo để tạo hàm và sử dụng. Còn muốn dùng hay không thì tùy 
        statics: { // định nghĩa 1 func động
            findByHoiDanIT(name) {
                return this.find({ name: new RegExp(name, 'i')});
            },

            findByEric(name) {
                return this.find({ name: new RegExp(name, 'i')});
            },
        }
    } 
);

customerSchema.plugin(mongoose_delete,  {overrideMethods: 'all'});// cau hinh mongoose-delete.
// {overrideMethods: 'all'} để khi get all customer thì k hiện lên thằng deleted:true

const Customer = mongoose.model('customer', customerSchema);//'user' là tên trong db, mongo sẽ tự động thêm s thành users

module.exports = Customer;
 