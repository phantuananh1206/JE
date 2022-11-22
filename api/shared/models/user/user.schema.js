const { FIELD_NAME, USER } = require('../../helpers/constant.helper')

function getSchema(DataTypes) {
    return {
        [FIELD_NAME.ID]: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        [FIELD_NAME.FULL_NAME]: {
            type: DataTypes.STRING
        },
        [FIELD_NAME.EMAIL]: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            },
            unique: 'email'
        },
        [FIELD_NAME.PASSWORD]: {
            type: DataTypes.STRING,
        },
        [FIELD_NAME.PHONE_NUMBER]: {
            type: DataTypes.STRING(50),
        },
        [FIELD_NAME.SEX]: {
            type: DataTypes.INTEGER(2),
        },
        [FIELD_NAME.IMAGE]: {
            type: DataTypes.INTEGER(5),
        },
        [FIELD_NAME.BIRTHDAY]: {
            type: DataTypes.DATE,
        },
        [FIELD_NAME.SALT]: {
            type: DataTypes.STRING(50),
        },
        [FIELD_NAME.ACTIVATION_CODE]: {
            type: DataTypes.TEXT,
        },
        [FIELD_NAME.ACTIVATION_EXPIRE]: {
            type: DataTypes.BIGINT,
        },
        [FIELD_NAME.COIN]: {
            type: DataTypes.DOUBLE,
        },
        [FIELD_NAME.STATUS]: {
            type: DataTypes.INTEGER(2),
            defaultValue: USER.STATUS.NEW
        },
        [FIELD_NAME.DEL_FLAG]: {
            type: DataTypes.INTEGER(5),
            defaultValue: 0
        },
        [FIELD_NAME.CREATE_DATE_TSP]: {
            type: DataTypes.BIGINT,
        },
        [FIELD_NAME.UPDATE_DATE_TSP]: {
            type: DataTypes.BIGINT,
        },
    };
}

module.exports = {
    getSchema
}
