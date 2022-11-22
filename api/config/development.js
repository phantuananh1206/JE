module.exports = Object.freeze({
    white_list: '*',
    jwt: {
        key: 'SGF2ZSB0byBkZWFsIHdpdGggQmFzZTY0IGZvcm1hdD8gVGhlbiB0aGlzIHNpdGUgaXMgbWFkZSBmb3IgeW91ISBVc2UgdGhlIHN1cGVyIHNpbXBsZSBvbmxpbmUgZm9ybSBiZWxvdyB0byBkZWNvZGUgb3IgZW5jb2RlIHlvdXIgZGF0YS4gSWYgeW91J3JlIGludGVyZXN0ZWQgYWJvdXQgdGhlIGlubmVyIHdvcmtpbmdzIG9mIHRoZSBCYXNlNjQgZm9ybWF0LCBqdXN0IHJlYWQgdGhlIGRldGFpbGVkIGRlc2NyaXB0aW9uIGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UuIFdlbGNvbWUh'
    },
    host_web: 'http://localhost:8679',
    email: {
        emailName: 'JE',
        emailAddress: 'justineric1206@gmail.com',
        accessKeyId: '',
        secretAccessKey: '',
        emailReceive: ''
    },
    locales: ['en'],
    db: {
        recreateDB: false,
        database: 'je',
        username: 'root',
        password: '1206',
        options: {
            host: '127.0.0.1',
            port: 3306,
            dialect: 'mysql',
            define: {
                charset: 'utf8',
                collate: 'utf8_general_ci',
                underscored: true,
            },
            sync: { force: false, alter: true },
            timestamps: true,
            timezone: '+07:00',
            logging: false
        },
        auth_magic: 'daiweaneatisubaejodaepiomaiprejacliastou',
        password_hash_algos: 'SHA-256'
    },
    encode_decode: {
        client_key: 'zuICmC7cqUnDroZYQCtj9XqIlNjpfIrcgLB4Td83cnEUiSSp64nUlBZiq2hxLTZH2TZ8ZavxfUiw7rdSbh3W6qMKrTAOR0vsIrV0uJdj44ZtgZJ6DpC12vuDiGrCeHdddAn0aWQ3BWG4M4fQt2FuE2MfGtrv0nd3',
        server_key: 'PCg2zbCtRahNy9c1adknfjV11SkVno7W0cxFAFUSUdcX2uqA5NAtEBoMAmHXfM2qWLA97sQ5ekqq7swCKeMHNjLcOTSQW4OEPc1Ejm7qa9O0X3uhRt49PDfb5cTBN2OH587TkFIfv3yHSH1VmMQNn4H8zzqNwP2u'
    },
    redis: {
        host: 'localhost',
        port: 6379,
        auth: '',
    }
});
