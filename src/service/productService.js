const Project = require('../model/project');
const aqp = require('api-query-params');

module.exports = {
    createProject: async (data) => {
        if (data.type === "EMPTY-PROJECT") {
            let result = await Project.create(data);
            return result;
        }

        if (data.type === "ADD-USERS") {
            let myProject = await Project.findById(data.projectId).exec();// projectId tên đặt trong postman
            for (let i = 0; i < data.usersArr.length; i++) {
                myProject.usersInfor.push(data.usersArr[i]);
            }

            let newResult = await myProject.save();
            return newResult;
        }

        if (data.type === "REMOVE-USERS") {
            let myProject = await Project.findById(data.projectId).exec();

            // myProject.usersInfor = myProject.usersInfor.filter(item => !data.usersArr.includes(item));
            //console.log(">>>myProject.usersInfor ", myProject.usersInfor, data.usersArr);

            for (let i = 0; i < data.usersArr.length; i++) {
                myProject.usersInfor.pull(data.usersArr[i]); // hàm pull để xóa trong array, xóa đơn thì remove
            }

            let newResult = await myProject.save();
            return newResult;
        }
    },

    getProjects: async (queryString) => {
        const page = queryString.page;
        const {filter, limit, population} = aqp(queryString);
        delete filter.page;
        let offset = (page - 1) * limit;
        result = await Project.find(filter).populate(population).skip(offset).limit(limit).exec();
        // populate('usersInfor') để fill dâta, giống từ ID lấy được data bên mysql

        // ảo vl nếu để populate hay populatetion và truyền vào populate(populate) hay populate(populatetion) thì không fill được datadata mặc dù trong postman đặt là populate: usersInfor
        // đã search gg là nếu dùng populate() thì tên value phải là population
        return result;
    },

    updateProject: async (data) => {
        let result = await Project.updateOne({_projectId: data.projectId}, {...data})
        return result;
    },

    deleteProject: async (id) => {
        let result = await Project.deleteById(id);
        return result;
    }
}