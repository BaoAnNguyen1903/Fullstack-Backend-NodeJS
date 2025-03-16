const connection = require("../config/database");

const getAllUsers = async () => {
    let [ results, fields] = await connection.query(`select * from Users`);
    return results;
}

const getUserById = async (userId) => {
    let [ results, fields] = await connection.query(`select * from Users where id=?`, [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    // nếu có results && results.length > 0 thì lấy giá trị đầu tiên của mảng là results[0], nếu không thì trả về rỗng {}
    return user
}

const updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.query(
        `update Users set email = ?, name = ?, city= ? where id = ?`, [email, name, city, userId],
    );
}

const deleteUserById = async (userId) => {
    let [results, fields] = await connection.query(
        `delete from Users where id = ?`, [userId]
    );
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}