const Task = require('../model/task');
const aqp = require('api-query-params'); // thư viện này để lấy động phần page và offset
// page là trang mấy và offset là bỏ qua bao nhiêu

module.exports = {
    createTask: async (data) => {
        if (data.type === "EMPTY-TASK") {
            let result = await Task.create(data);
            return result;
        }
    },

    getTasks: async (queryString) => {
        const page = queryString.page;
        const {filter, limit} = aqp(queryString);
        delete filter.page;
        let offset = (page - 1) * limit;
        result = await Task.find(filter).skip(offset).limit(limit).exec();
        return result;
    },

    updateTask: async (data) => {
        let result = await Task.updateOne({_taskId: data.taskId}, {...data}) // để giữ những thuộc tính k thay đổi
        return result;
    },

    deleteTask: async (taskId) => {
        let result = await Task.deleteById(taskId); // hàm delete của thư viện mongoose-delete set true false
        return result;
    }
}