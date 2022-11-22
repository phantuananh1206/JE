const templateEmail = require('../../shared/mail_templates/template');
const { FIELD_NAME, TABLE } = require('../helpers/constant.helper');
const configCommon = require('../../shared/helpers/configCommon.helper');
const hostWeb = configCommon.getHostWeb();

const sendMailRegister = async (lang, data) => {
    const content = `${hostWeb}/${data[FIELD_NAME.ACTIVATION_CODE]}`;
    await templateEmail.sendEmail('', content, data[FIELD_NAME.EMAIL], lang)
}

module.exports = {
    sendMailRegister
}
