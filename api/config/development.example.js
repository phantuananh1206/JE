module.exports = Object.freeze({
    white_list: '*',
    jwt: {
        key: ''
    },
    host_web: '',
    email: {
        emailName: 'JE',
        emailAddress: '',
        accessKeyId: '',
        secretAccessKey: '',
        emailReceive: ''
    },
    locales: ['en'],
    db: {
        recreateDB: false,
        database: 'je',
        username: 'root',
        password: '',
        options: {
            host: '127.0.0.1',
            port: 3306,
            dialect: 'mysql',
            define: {
                charset: 'utf8',
                collate: 'utf8_general_ci',
                underscored: true,
            },
            sync: { force: false, alter: false },
            timestamps: true,
            timezone: '+07:00',
            logging: false
        },
        auth_magic: 'daiweaneatisubaejodaepiomaiprejacliastou',
        password_hash_algos: 'SHA-256'
    },
    redis: {
        host: 'localhost',
        port: 6379,
        auth: '',
    }
});
