const _ = require('lodash');
const express = require('express')
const chalk = require('chalk')

const app = express();

const i18n = require('i18n');
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser');
// const swaggerIndex = require('./docs/index')
const db = require('./shared/models/db');
const configCommon = require('./shared/helpers/configCommon.helper')
const generalErrorHandler = require('./shared/helpers/generalErrorHandler.helper');
// const redisUtils = require('./shared/helpers/redisUtils.helper');

// redis
// redisUtils.init();

const port = process.env.PORT || 8679;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


const routerIndex = require('./routes')(app);
routerIndex.registerRoutes();

/**
* =====================
*  Config middleware
* =====================
*/
// configure middlewares

/**
* =====================
*  Config Api document
* =====================
*/

// swaggerIndex(app, fs).getSwaggerTools()
/**
* =====================
*  Config Api error
* =====================
*/
app.use(generalErrorHandler.handleError);

i18n.configure({
    locales: configCommon.getLanguageSupport(),
    directory: `${__dirname}/config/locales`
});
/**
* =====================
*  Config SocketIO
* =====================
*/
// const socketServer = require('./socket/server.socket');

// const redisAdapter = require('socket.io-redis');

// io.adapter(redisAdapter({ host: 'localhost', port: 6379 }));

/**
* ==============
* Init mysql
* ==============
*/
db.connect()
    .then(() => {
        db.initData();

        console.log('Connection has been established of database successfully');
        let server;
        if (process.env.MODE_BUILD === 'prod') {
            const options = {
                key: fs.readFileSync("/etc/letsencrypt/live/autham.jp/privkey.pem"),
                cert: fs.readFileSync("/etc/letsencrypt/live/autham.jp/fullchain.pem"),
            };
            server = https.createServer(options, app);
        } else {
            server = require('http').Server(app);
        }
        server.listen(port, () => {
            console.log(chalk.red('Server api development running at'), ` http://:${port}/`);
            //    console.log(chalk.blue('Server socket development running at'), ` http://:${port}/`)
            console.log(chalk.yellow('Api doc is available on'), ` http://localhost:${port}/docs`);
        });
    }).catch((error) => {
        console.log(error);
        process.exit();
    });

module.exports = app;
