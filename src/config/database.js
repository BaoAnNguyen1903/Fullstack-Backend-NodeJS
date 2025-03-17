require('dotenv').config(); // import khi xai` process.env

//get the client
const mongoose = require('mongoose'); // thêm promise để k phải viết dưới dạng callback

const dbState = [{
    value: 0,
    label: "disconnected"
},
{
    value: 1,
    label: "connected"
},
{
    value: 2,
    label: "connecting"
},
{
    value: 3,
    label: "disconnecting"
}];

const connection = async () => {
        const options = {
            user: process.env.DB_USER, // muốn kết nối db để tăng hiệu năng thì dùng dbpool.
            //  thư viện viết bằng ts nên truy cập thẳng vào thư viện để xem những tham số cần truyền vào
            pass: process.env.DB_PASSWORD,

        }
        await mongoose.connect(process.env.DB_HOST, options);
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
}
  
module.exports = connection;