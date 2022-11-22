const express = require('express');
const router = express.Router();
const resHelper = require('../../shared/helpers/resHandler.helper');
const loginHandler = require('../../core/user_management/login.handler')
const appConstant = require('../../shared/helpers/constant.helper');

router.post('/', async (req, res) => {
    try {
        const auth = req.header(appConstant.HEADER.AUTH);
        const result = await loginHandler.login(auth, res.locals);
        resHelper.sendResponse(res, result);
    } catch (error) {
        resHelper.sendError(res, error)
    }
})

module.exports = router;