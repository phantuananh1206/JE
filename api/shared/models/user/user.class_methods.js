const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static associate(models) {
    }

    /**
     * @description insert data
     * @param {*} body 
     * @param {*} t 
     * @returns 
     */
    static insertData(body, t) {
        return User.create(body, {
            transaction: t
        })
    }

    /**
     * @description get data by condition
     * @param {*} query 
     * @returns 
     */
    static getDataByCondition(query) {
        return User.findOne({
            where: query
        })
    }

    /**
     * @description update data
     * @param {*} query 
     * @param {*} body 
     * @param {*} t 
     * @returns 
     */
    static updateData(query, body, t) {
        return User.update(body, {
            where: query,
            transaction: t
        })
    }
}

module.exports = User;
