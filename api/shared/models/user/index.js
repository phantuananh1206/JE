
const objSchema = require('./user.schema')
const objClassMethods = require('./user.class_methods');
const objHook = require('./user.hook')

const hooks = objHook.getHooks()
const { TABLE, FIELD_NAME } = require('../../helpers/constant.helper')

module.exports = (sequelize, DataTypes) => {
    const schema = objSchema.getSchema(DataTypes)
    const User = objClassMethods.init(
        schema,
        {
            timestamps: true,
            updatedAt: FIELD_NAME.UPDATE_DATE,
            createdAt: FIELD_NAME.CREATE_DATE,
            hooks,
            sequelize,
            modelName: TABLE.USER,
            tableName: TABLE.USER,
            indexes: [
                {
                    name: 'del_flag',
                    fields: [FIELD_NAME.DEL_FLAG]
                }
            ]
        }
    );
    return User;
}
