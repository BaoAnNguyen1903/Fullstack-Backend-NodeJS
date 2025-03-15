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
    console.log(">>> req.body", req.body) // req.body để truyền data từ client lên sever
    res.send('create a new user')
}

module.exports = {
    getHomepage,
    getBaoAn,
    getSample,
    postCreateUser
}