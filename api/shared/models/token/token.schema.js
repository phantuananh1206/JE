const { FIELD_NAME } = require('../../helpers/constant.helper')

function getSchema(DataTypes) {
    return {
        [FIELD_NAME.ID]: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        [FIELD_NAME.TOKEN]: {
            type: DataTypes.TEXT,
            notNull: true
        }
    };
}

module.exports = {
    getSchema
}
