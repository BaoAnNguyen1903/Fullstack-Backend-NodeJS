const {uploadSingleFile} = require("../service/fileService");

// object phai co {key: value}
module.exports = {
    postCreateCustomerAPI : async (req, res) => {
        // destructing object js
        let {name, address, phone, email, description} = req.body;
        let imageUrl = "";
        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        } else {
            let results = await uploadSingleFile(req.files.image);
            imageUrl = results.path; // cần đường link này để lưu vào db
        }
    }   
}