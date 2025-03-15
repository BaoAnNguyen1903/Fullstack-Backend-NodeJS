const connection = require("../config/database");

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getBaoAn = (req, res) => {
    res.send('Hello World! and bao an dep trai vcl hahahahahhahaha')
}

const getSample = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {
    // console.log(">>> req.body", req.body)  //req.body để truyền data từ client lên sever
    let email = req.body.email; // những thuộc tính này lấy dâta bằng name="" bên html
    let name = req.body.name;
    let city = req.body.city;
    // console.log(">>> email= ", email, 'name= ', name, 'city= ',city)
    connection.query(
        ` insert into Users (email, name, city) values (?, ?, ?) `,
        [email, name, city],
        function(err, results) {
            console.log(results);
            res.send('create user success !');
        }
    )
}

module.exports = {
    getHomepage,
    getBaoAn,
    getSample,
    postCreateUser
}