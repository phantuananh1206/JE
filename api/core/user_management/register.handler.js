const bcrypt = require('bcrypt');
const moment = require('moment');
const { TABLE, FIELD_NAME, USER } = require('../../shared/helpers/constant.helper');
const localesUtils = require('../../shared/helpers/localesUtils.helper');
const formatEmail = require('../../shared/helpers/formatEmail.helper')
const { models } = require('../../shared/models/db');
const encodeDecode = require('../../shared/security/encode_decode')

const register = async (body, locals) => {
    const lang = locals.lang;
    const user = await models[TABLE.USER].getDataByCondition({
        [FIELD_NAME.EMAIL]: body[FIELD_NAME.EMAIL]
    })
    if (user) {
        throw new Error(localesUtils.userMessage(lang).REGISTER.ACCOUNT_WAS_REGISTER_BEFORE)
    }
    const salt = bcrypt.genSaltSync(10);
    body[FIELD_NAME.SALT] = salt;
    const password = bcrypt.hashSync(body[FIELD_NAME.PASSWORD], salt);
    body[FIELD_NAME.PASSWORD] = password;
    body[FIELD_NAME.ACTIVATION_CODE] = encodeDecode.encode(body[FIELD_NAME.EMAIL]);
    body[FIELD_NAME.ACTIVATION_EXPIRE] = moment().add(3, 'd').valueOf();
    await models[TABLE.USER].insertData(body);
    await formatEmail.sendMailRegister(lang, body);
    return {
        message: localesUtils.commonMessage(lang).CREATE_DATA_IS_SUCCESSFULLY
    }
}

const resendLinkActive = async (body, locals) => {
    const lang = locals.lang;
    body[FIELD_NAME.EMAIL] = encodeDecode.decode(body[FIELD_NAME.EMAIL]);
    const user = await models[TABLE.USER].getDataByCondition({
        [FIELD_NAME.EMAIL]: body[FIELD_NAME.EMAIL]
    })
    if (!user) {
        throw new Error(localesUtils.commonMessage(lang).EMAIL_IS_NOT_EXIST)
    }
    body[FIELD_NAME.ACTIVATION_CODE] = encodeDecode.encode(body[FIELD_NAME.EMAIL]);
    body[FIELD_NAME.ACTIVATION_EXPIRE] = moment().add(3, 'd').valueOf();
    await models[TABLE.USER].updateData({
        [FIELD_NAME.ID]: user[FIELD_NAME.ID]
    }, body)
    await formatEmail.sendMailRegister(lang, body);
    return {
        message: localesUtils.userMessage(lang).VERIFY.RESEND_LINK_ACTIVE
    }
}

const activeAccount = async (body, locals) => {
    const lang = locals.lang;
    body[FIELD_NAME.EMAIL] = encodeDecode.decode(body[FIELD_NAME.EMAIL]);
    const user = await models[TABLE.USER].getDataByCondition({
        [FIELD_NAME.EMAIL]: body[FIELD_NAME.EMAIL]
    })
    if (!user) {
        throw new Error(localesUtils.commonMessage(lang).EMAIL_IS_NOT_EXIST)
    }
    if (user[FIELD_NAME.STATUS] === USER.STATUS.ACTIVE) {
        throw new Error(localesUtils.userMessage(lang).VERIFY.VERIFIED)
    }
    const timeNow = moment().valueOf();
    if (user[FIELD_NAME.ACTIVATION_EXPIRE] < timeNow) {
        throw new Error(localesUtils.userMessage(lang).VERIFY.ACTIVATION_EXPIRED)
    }
    if (encodeDecode.decode(user[FIELD_NAME.ACTIVATION_CODE]) !== body[FIELD_NAME.EMAIL]) {
        throw new Error(localesUtils.userMessage(lang).VERIFY.ACTIVATION_CODE_INVALID)
    }
    await models[TABLE.USER].updateData({
        [FIELD_NAME.ID]: user[FIELD_NAME.ID]
    }, {
        [FIELD_NAME.ACTIVATION_CODE]: null,
        [FIELD_NAME.ACTIVATION_EXPIRE]: null,
        [FIELD_NAME.STATUS]: USER.STATUS.ACTIVE
    })
    return {
        message: localesUtils.userMessage(lang).VERIFY.ACTIVATED_ACCOUNT_SUCCESSFULLY
    }
}

module.exports = {
    register,
    resendLinkActive,
    activeAccount
}