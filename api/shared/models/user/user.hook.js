const moment = require('moment');
const { FIELD_NAME } = require('../../helpers/constant.helper');

function getHooks() {
    return {
        beforeValidate: (user) => {
            if (typeof user.email === 'string') {
                user.email = user.email.toLowerCase();
            }
        },
        beforeCreate: (data) => {
            data[FIELD_NAME.CREATE_DATE_TSP] = moment().valueOf();
            data[FIELD_NAME.UPDATE_DATE_TSP] = moment().valueOf();
        },
        beforeUpdate: (data) => {
            data[FIELD_NAME.UPDATE_DATE_TSP] = moment().valueOf()
        }
    }
}
module.exports = {
    getHooks
}
