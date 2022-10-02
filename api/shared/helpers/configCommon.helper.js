/* eslint-disable */
class ConfigCommon {
    getConfig() {
        switch (process.env.MODE_BUILD) {
            case 'dev':
                return require('../../config/development');
            case 'prod':
                return require('../../config/production');
            default:
                return require('../../config/development');
        }
    }

    getHost() {
        return this.getConfig().host;
    }

    getHostWeb() {
        return this.getConfig().host_web;
    }

    getEmail() {
        return this.getConfig().email;
    }

    getWhiteList() {
        return this.getConfig().white_list;
    }

    getDb() {
        return this.getConfig().db;
    }

    getKey() {
        return this.getConfig().jwt.key;
    }


    getLanguageSupport() {
        return this.getConfig().locales
    }

    getRedisConfig() {
        return this.getConfig().redis;
    }

}
module.exports = new ConfigCommon();
