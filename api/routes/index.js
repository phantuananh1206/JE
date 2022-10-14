const adminRouter = require('./admin');

class RouterIndex {
    constructor(app) {
        this.app = app;
    }

    registerRoutes() {
        this.app.use('/', adminRouter);
    }
}

module.exports = (app) => { return new RouterIndex(app) };
