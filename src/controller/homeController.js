const connection = require("../config/database");
const { getAllUsers, getUserById, updateUserById } = require('../service/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results})
}

const getBaoAn = (req, res) => {
    res.send('Hello World! and bao an dep trai vcl hahahahahhahaha')
}

const getSample = (req, res) => {
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}


// callback function
const postCreateUser = async (req, res) => {
    // console.log(">>> req.body", req.body)  //req.body để truyền data từ client lên sever
    let email = req.body.email; // những thuộc tính này lấy dâta bằng name="" bên html
    let name = req.body.name;
    let city = req.body.city;
    // console.log(">>> email= ", email, 'name= ', name, 'city= ',city)
    // connection.query(
    //     ` insert into Users (email, name, city) values (?, ?, ?) `,
    //     [email, name, city],
    //     function(err, results) {
    //         console.log(results);
    //         res.send('create user success !');
    //     }
    // );

    let [results, fields] = await connection.query(
        ` insert into Users (email, name, city) values (?, ?, ?) `, [email, name, city],
    );

    console.log(">>> check results: ", results);
    res.send('Create user success !');
    // connection.query(
    //     `select * from Users`,
    //     function (err, results, fields) {
    //         console.log(">>> results= ", results)
    //     }
    // )

    // const [results, fields] = await connection.query('select * from Users');
    // console.log(">>> check results= ", results);
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('edit.ejs', {userEdit : user})// bên trái là tên biến muốn truyền, bên phải là giá trị của nónó
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    await updateUserById(email, name, city, userId);
    res.redirect('/');
}

module.exports = {
    getHomepage,
    getBaoAn,
    getSample,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
}