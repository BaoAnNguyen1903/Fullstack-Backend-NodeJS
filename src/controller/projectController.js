const {createProject} = require('../service/productService');

module.exports = {
    postCreateProject : async (req, res) => {
        let result = await createProject(req.body);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    }
}