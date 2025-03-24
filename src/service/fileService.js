const uploadSingleFile = async (fileObject) => {
    // The name of the input filed (i.e "sampleFile") is used to retrieve the uploaded file
    let uploadPath = __dirname + fileObject.name;

    // Use the mv() method to place the file somewhere on your server
    
    // return promise
    try {
        await fileObject.mv(uploadPath);
        return {
            status: 'success',
            path: 'link-image',
            error: null
        }
    } catch (error) {
        console.log(">>>check err: ", error)
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(error)
        }
    }

    //callback
    // fileObject.mv(uploadPath, function(err) {
    //     if (err)
    //         {
    //             console.log(">>>check err: ", err)
    //             return {
    //                 status: 'failed',
    //                 path: null,
    //                 error: JSON.stringify(err)
    //             }
    //         }
    //     return {
    //         status: 'success',
    //         path: 'link-image',
    //         error: null
    //     }
    // });
}

const uploadMultipleFile = () => {

}

module.exports = {
    uploadSingleFile,
    uploadMultipleFile
}