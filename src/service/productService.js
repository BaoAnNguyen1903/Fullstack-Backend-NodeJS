const Project = require('../model/project');

module.exports = {
    createProject: async (data) => {
        if (data.type === "EMPTY-PROJECT") {
            let result = await Project.create(data);
            return result;
        }

        if (data.type === "ADD-USERS") {
            console.log(">>>check data: ", data);
            let myProject = await Project.findById(data.projectId).exec();// projectId tên đặt trong postman
            
            for (let i = 0; i < data.usersArr.length; i++) {
                myProject.usersInfor.push(data.usersArr[i]);
            }

            let newResult = await myProject.save();

            console.log(myProject);
            return newResult;
        }

        return null;
    }
}