const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    //config template engine
    app.set('views', path.join('./src', 'view')) // views vì express mặc định tìm kiếm thư mục tên viewsviews
    app.set('view engine', './ejs') // view engine chứ không phải views engine vì mặc định là vậy

    // views: Định nghĩa thư mục chứa các file template.
    // view engine: Xác định engine nào sẽ được sử dụng để render template.
    // views engine không phải là một key hợp lệ trong Express, nên nó không có tác dụng.

    //config static files
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;