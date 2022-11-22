const express = require('express');
const router = express.Router();
const resHelper = require('../../shared/helpers/resHandler.helper');
const registerHandler = require('../../core/user_management/register.handler')
const validateUser = require('../../shared/validate/user_management')

router.post('/', async (req, res) => {
    try {
        const body = validateUser.registerUser(req.body, res.locals);
        const result = await registerHandler.register(body, res.locals);
        resHelper.sendResponse(res, result);
    } catch (error) {
        resHelper.sendError(res, error)
    }
})

router.post('/resend-link', async (req, res) => {
    try {
        const result = await registerHandler.resendLinkActive(req.body, res.locals);
        resHelper.sendResponse(res, result);
    } catch (error) {
        resHelper.sendError(res, error)
    }
})

router.post('/active-account', async (req, res) => {
    try {
        const result = await registerHandler.activeAccount(req.body, res.locals);
        resHelper.sendResponse(res, result);
    } catch (error) {
        resHelper.sendError(res, error)
    }
})

module.exports = router;