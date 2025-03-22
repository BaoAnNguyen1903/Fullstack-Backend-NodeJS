const connection = require("../config/database");
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../service/CRUDService');
const User = require("../model/user");

const getHomepage = async (req, res) => {
    let results = await User.find({});
    return res.render('home.ejs',{listUsers: results});
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

const postCreateUser = async (req, res) => {
    // console.log(">>> req.body", req.body)  //req.body để truyền data từ client lên sever
    let email = req.body.email; // những thuộc tính này lấy dâta bằng name="" bên html
    let name = req.body.name;
    let city = req.body.city;
    await User.create({
        email: email,
        name: name,
        city: city
    })
    res.send('Create user success !');
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    // let user = await getUserById(userId);
    let user = await User.findById(userId).exec();
    res.render('edit.ejs', {userEdit : user})// bên trái là tên biến muốn truyền, bên phải là giá trị của nónó
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    // await updateUserById(email, name, city, userId);
    await User.updateOne({_id: userId}, {email: email, name: name, city: city}); // _id để select và update những thuộc tính ở sau
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('delete.ejs', {userEdit: user});
}

const postHandleRemoveUser = async (req, res) => {
    let userId = req.body.userId;
    await deleteUserById(userId);
    res.redirect("/");
}

module.exports = {
    getHomepage,
    getBaoAn,
    getSample,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}