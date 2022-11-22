const Sequelize = require('sequelize');
const { TABLE, FIELD_NAME } = require('../../helpers/constant.helper')
const db = require('../../models/db')

class Token extends Sequelize.Model {
    static associate(models) {
        this.models = models
        this.belongsTo(models[TABLE.USER], { foreignKey: FIELD_NAME.USER_ID })
    }

    /**
     *
     * @param {*} body
     * @param {*} t
     */
    static insert(body, t) {
        return Token.create(body, {
            transaction: t
        });
    }

    /**
     *
     * @param {*} token
     * @param {*} option
     */
    static getByToken(token, option) {
        return Token.findOne({
            where: { token },
            include: {
                model: db.models[TABLE.USER],
                attributes: {
                    exclude: [FIELD_NAME.PASSWORD]
                }
            },
            ...option
        })
    }

    /**
     *
     * @param {*} token
     * @param {*} t
     */
    static deleteToken(token, t) {
        return Token.destroy({
            where: {
                token
            },
            transaction: t
        })
    }
}

module.exports = Token;
