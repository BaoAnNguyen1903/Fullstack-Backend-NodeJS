require('dotenv').config(); // import khi xai` process.env

//get the client
const mysql = require('mysql2/promise'); // thêm promise để k phải viết dưới dạng callback

// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT, //default: 3006 nhưng đang chạy db bằng docker nên chạy 3007
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

const connection = async () => {
    // Or:
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
    } catch (error) {
        handleError(error); // lưu lỗi xuống db
    }
}
  
module.exports = connection;