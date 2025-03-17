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
    // Or:
    try {
        await mongoose.connect('mongodb://root:123456@localhost:27018');
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
    } catch (error) {
        handleError(error); // lưu lỗi xuống db
    }
}
  
module.exports = connection;