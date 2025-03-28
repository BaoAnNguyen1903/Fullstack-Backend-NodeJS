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
        return null;
    },

    getProjects: async (queryString) => {
        const page = queryString.page;
        const {filter, limit, population} = aqp(queryString);
        delete filter.page;
        let offset = (page - 1) * limit;
        result = await Project.find(filter).populate(population).skip(offset).limit(limit).exec();
        // populate('usersInfor') để fill dâta

        // ảo vl nếu để populate hay populatetion và truyền vào populate(populate) hay populate(populatetion) thì không fill được datadata mặc dù trong postman đặt là populate: usersInfor
        // đã search gg là nếu dùng populate() thì tên value phải là population
        return result;
    }
}