const jwt = require('jsonwebtoken');
const moment = require('moment');
const _ = require('lodash');
const appConstant = require('../helpers/constant.helper');
const localesUtil = require('../helpers/localesUtils.helper');
const configCommon = require('../helpers/configCommon.helper');
const { models } = require('../../shared/models/db');
const { TABLE, FIELD_NAME, USER } = require('../helpers/constant.helper');

function createToken(user) {
    const now = moment().unix();
    if (user.token) {
        user.token = null;
    }
    const userInfo = _.pick(user, ['full_name', 'email']);
    const payload = {
        iat: now,
        exp: now + appConstant.TIME_EXP_TOKEN,
        uid: user[FIELD_NAME.ID],
        claims: { userInfo }
    };
    return jwt.sign(payload, configCommon.getKey());
}

const verifyToken = async (reqToken, lang) => {
    let decodeToken = jwt.verify(reqToken, configCommon.getKey());
    const token = await models[TABLE.TOKEN].getByToken(reqToken);
    if (!token || decodeToken.exp < moment().unix()) {
        throw Error(localesUtil.userMessage(lang).AUTH.INVALID_ACCESS_TOKEN)
    }
    const user = token.dataValues.user;
    if (!user[FIELD_NAME.EMAIL]) {
        throw Error(localesUtil.userMessage(lang).AUTH.INVALID_ACCESS_TOKEN)
    }
    return token;
}

module.exports = {
    createToken,
    verifyToken
}
