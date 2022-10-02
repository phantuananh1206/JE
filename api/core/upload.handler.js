const upload = require('../shared/helpers/uploadFile.helper')
const configCommon = require('../shared/helpers/configCommon.helper')

async function uploadImage(lang, body) {
    try {
        await upload.uploadToDisk(configCommon.getImageDir(), body.name, body.extension, body.base64)
        return `${configCommon.getLinkImage()}/${body.name}.${body.extension}`
    } catch (error) {
        throw error;
    }
}

module.exports = {
    uploadImage
}
