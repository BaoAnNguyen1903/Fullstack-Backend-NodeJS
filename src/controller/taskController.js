const {
    createTask,
    getTasks,
    updateTask,
    deleteTask
} = require('../service/taskService')

module.exports = {
    createTaskAPI: async (req, res) => {
        let result = await createTask(req.body)
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    },

    getTasksAPI: async (req, res) => {
        let result = await getTasks(req.query);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    },

    updateTaskAPI: async (req, res) => {
        let result = await updateTask(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },

    deleteTaskAPI: async (req, res) => {
        let result = await deleteTask(req.body.taskId);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}