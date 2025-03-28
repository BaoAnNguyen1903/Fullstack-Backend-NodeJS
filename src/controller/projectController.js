const {createProject, getProjects} = require('../service/productService');

module.exports = {
    postCreateProject : async (req, res) => {
        let result = await createProject(req.body);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    },

    getAllProject : async (req, res) => {
        let result = await getProjects(req.query);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    }
}