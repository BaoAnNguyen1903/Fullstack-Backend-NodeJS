const mongoose = require('mongoose');

//shape data (định dạnh dữ liệu)
// mongoose bắt phải thông qua Schema để khai báo dữ liệu giúp ràng buộc dữ liệu chặt chẽ hơn
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String
});

const User = mongoose.model('user', userSchema);//'user' là tên trong db, mongo sẽ tự động thêm s thành users

module.exports = User;
 