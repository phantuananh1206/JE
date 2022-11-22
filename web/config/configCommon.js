class ConfigCommon {
    getConfig() {
        switch (process.env.MODE_BUILD) {
            case 'dev':
                return require('./development');
            case 'prod':
                return require('./production');
            default:
                return require('./development');
        }
    }

    getHostWeb() {
        return this.getConfig().host_web;
    }

    getEncodeDecode() {
        return this.getConfig().encode_decode;
    }

}
module.exports = new ConfigCommon();
