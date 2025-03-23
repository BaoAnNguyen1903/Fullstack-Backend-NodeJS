const User = require("../model/user");

const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json(
        {
            errorCode: 0,
            data: results
        }
    )
}

const postCreateUserAPI = async (req, res) => {
    // console.log(">>> req.body", req.body)  //req.body để truyền data từ client lên sever
    let email = req.body.email; // những thuộc tính này lấy dâta bằng name="" bên html
    let name = req.body.name;
    let city = req.body.city;
    let user = await User.create({
        email: email,
        name: name,
        city: city
    })
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    )
}

const putUpdateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    // await updateUserById(email, name, city, userId);
    let user = await User.updateOne({_id: userId}, {email: email, name: name, city: city}); // _id để select và update những thuộc tính ở sau
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    )
}

const deleteDeleteUserAPI = async (req, res) => {
    let userId = req.body.userId;
    // await deleteUserById(userId);
    let user = await User.deleteOne({_id: userId})
    return res.status(200).json(
        {
            errorCode: 0,
            data: user
        }
    )
}

module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteDeleteUserAPI
}