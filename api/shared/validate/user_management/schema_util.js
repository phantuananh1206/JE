const joi = require('@hapi/joi');
const { FIELD_NAME } = require('../../helpers/constant.helper')

const registerUser = joi.object().keys({
    [FIELD_NAME.EMAIL]: joi.string().max(100).email({ minDomainSegments: 2 }).required()
        .error(new Error('EMAIL_INVALID')),
    [FIELD_NAME.PASSWORD]: joi.string().regex(/^[\x21-\x7E]{6,40}$/).required()
        .error(new Error('PASSWORD_INVALID')),
}).options({ allowUnknown: true })

module.exports = {
    registerUser
}
