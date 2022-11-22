const joi = require('@hapi/joi');
const _ = require('lodash');
const localesUtils = require('../../helpers/localesUtils.helper');
const encodeDecode = require('../../security/encode_decode');
const schema = require('./schema_util');
const { FIELD_NAME } = require('../../helpers/constant.helper');

function registerUser(body, locals) {
    const lang = locals.lang;
    body[FIELD_NAME.EMAIL] = encodeDecode.decode(body[FIELD_NAME.EMAIL]);
    body[FIELD_NAME.PASSWORD] = encodeDecode.decode(body[FIELD_NAME.PASSWORD]);
    const result = joi.validate(body, schema.registerUser);
    if (result.error) {
        const message = localesUtils.validateMessage(lang)[`${result.error.message}`] || localesUtils.validateMessage(lang).SOME_FIELDS_ARE_NOT_ALLOWED;
        throw new Error(message);
    }
    return body;
}


module.exports = {
    registerUser
}
