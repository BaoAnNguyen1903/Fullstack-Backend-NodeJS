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
        delete filter.page; // page bị thừa vì FE sẽ gửi client sẽ truyền page lên để tính ra skip. nếu truyền page và thì sẽ hiểu là 1 thuộc tính và muốn query nên xóa
        let offset = (page - 1) * limit;
        result = await Task.find(filter).skip(offset).limit(limit).exec(); //skip() là 1 hàm của mongoose .exec là 1 hàm thực thi đảm bảo đúng là 1 promise
        //queryString sẽ trả ra gtri chính xác nếu chúng t truyền như này name=baoan thì chính xác 100% là baoan k có thừa thiếu
        // nếu chúng t truyền name=/baoan/ thì tất cả thằng nào có chữ baoan sẽ được query
        return result;
    },

    updateTask: async (data) => {
        let result = await Task.updateOne({_taskId: data.taskId}, {...data}) // để giữ những thuộc tính k thay đổi
        return result;
    },

    deleteTask: async (taskId) => {
        // let result = await Customer.deleteOne({_id: customerId}); đây là xóa luôn trong db
        let result = await Task.deleteById(taskId); // hàm delete của thư viện mongoose-delete set true false
        return result;
    }
}