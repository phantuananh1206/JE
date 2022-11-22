
const tokenSchema = require('./token.schema')
const tokenClassMethods = require('./token.class_methods');
const tokenHook = require('./token.hook')

const hooks = tokenHook.getHooks()
const { TABLE, FIELD_NAME } = require('../../helpers/constant.helper')

module.exports = (sequelize, DataTypes) => {
    const schema = tokenSchema.getSchema(DataTypes)
    const Token = tokenClassMethods.init(
        schema,
        {
            timestamps: true,
            paranoid: true,
            updatedAt: FIELD_NAME.UPDATE_DATE,
            createdAt: FIELD_NAME.CREATE_DATE,
            underscored: true,
            hooks,
            sequelize,
            modelName: TABLE.TOKEN,
            tableName: TABLE.TOKEN
        }
    );
    return Token;
}
