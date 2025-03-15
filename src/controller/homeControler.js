const connection = require("../config/database");
const { use } = require("../routes/web");

const getHomepage = (req, res) => {
    let users = [];

    connection.query(
        'SELECT * FROM Users',
        function (err, results, fields) {
            users = results;
            console.log(">>> results= ", results);
            console.log(">>> check users: ", users)
            res.send(JSON.stringify(users)) // hàm này để coverage ra chuỗi string vì users là object
        }
    );
}

const getBaoAn = (req, res) => {
    res.send('Hello World! and bao an dep trai vcl hahahahahhahaha')
}

module.exports = {
    getHomepage,
    getBaoAn
}