const mongoose = require('mongoose');

//shape data (định dạnh dữ liệu)
// mongoose bắt phải thông qua Schema để khai báo dữ liệu giúp ràng buộc dữ liệu chặt chẽ hơn
const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;
