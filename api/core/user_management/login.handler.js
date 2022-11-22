const bcrypt = require('bcrypt');
const _ = require('lodash');
const { TABLE, FIELD_NAME, USER, BOOLEAN_VALUE } = require('../../shared/helpers/constant.helper');
const localesUtils = require('../../shared/helpers/localesUtils.helper');
const { models } = require('../../shared/models/db');
const encodeDecode = require('../../shared/security/encode_decode')
const userAuthentication = require('../../shared/security/user_authentication');

const login = async (auth, locals) => {
    const lang = locals.lang;
    auth = encodeDecode.decode(auth);
    const email = auth.toString().split(':')[0];
    const password = auth.toString().split(':')[1];
    const user = await models[TABLE.USER].getDataByCondition({
        email,
        [FIELD_NAME.STATUS]: USER.STATUS.ACTIVE,
        [FIELD_NAME.DEL_FLAG]: BOOLEAN_VALUE.FALSE
    })
    if ((!user)) {
        throw new Error(localesUtils.userMessage(lang).LOGIN.EMAIL_INCORRECT);
    }
    const hashPassword = bcrypt.hashSync(password, user[FIELD_NAME.SALT]);
    if (user[FIELD_NAME.PASSWORD] == hashPassword) {
        const token = userAuthentication.createToken(user.dataValues);
        const dataTokenInsert = {
            [FIELD_NAME.USER_ID]: user[FIELD_NAME.ID],
            token
        }
        await models[TABLE.TOKEN].insert(dataTokenInsert);
        const userInfo = _.merge(user.dataValues, {
            token
        })
        return _.omit(userInfo, [FIELD_NAME.PASSWORD]);
    }
}

module.exports = {
    login
}