const adminRouter = require('./admin');
const register = require('./user_management/register');
const encodeDecode = require('./encode_decode');
const login = require('./user_management/login');

class RouterIndex {
    constructor(app) {
        this.app = app;
    }

    registerRoutes() {
        this.app.use('/', adminRouter);
        this.app.use('/register', register);
        this.app.use('/security', encodeDecode);
        this.app.use('/login', login);
    }
}

module.exports = (app) => { return new RouterIndex(app) };
