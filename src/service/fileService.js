const { error } = require('console');
const path = require('path'); // thư viện này để dẫn upload
const { isNull } = require('util');

const uploadSingleFile = async (fileObject) => {
    // The name of the input filed (i.e "sampleFile") is used to retrieve the uploaded file
    let uploadPath = path.resolve(__dirname, "../public/images/upload");
    // get image extention (tên mở rông)
    // abc.png => abc-timestamp.png
    let extName = path.extname(fileObject.name);
    // get image's bane (without extention)
    let baseName = path.basename(fileObject, extName);
    // create final path: eg: /upload/your-image.png
    let finalName = `${baseName}-${Date.now()}${extName}`
    let finalPath = `${uploadPath}/${finalName}`
    // return promise
    try {
        await fileObject.mv(finalPath);
        return {
            status: 'success',
            path: finalName,
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

const uploadMultipleFile = async (filesArr) => {
    try {
        let uploadPath = path.resolve(__dirname, "../public/images/upload");
        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < filesArr.length; i++) {
            // get image extention
            let extName = path.extname(filesArr[i].name);

            // get image's name (without extention)
            let baseName = path.basename(filesArr[i].name, extName);

            // create final path: eg: /upload/your-image.png
            let finalName = `${baseName}-${Date.now()}${extName}`
            let finalPath = `${uploadPath}/${finalName}`
            
            try {
                await filesArr[i].mv(finalPath)
                resultArr.push({
                    status: 'success',
                    path: finalName, // đường link mà nó lưu
                    fileName: filesArr[i].name, // fileName ban đầu
                    error: null
                })
                countSuccess++;
            } catch (err) {
                resultArr.push({
                    status: 'failed',
                    path: null,
                    finalName: filesArr[i].name,
                    error : JSON.stringify(err)
                })
            }
        }
        
        return {
            countSuccess: countSuccess,
            detail: resultArr
        }
    } catch (error) {
        console.log(">>>check err: ", error);
    }
}

module.exports = {
    uploadSingleFile,
    uploadMultipleFile
}