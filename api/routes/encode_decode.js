const express = require('express');
const router = express.Router();
const resHelper = require('../shared/helpers/resHandler.helper');
const encodeDecode = require('../shared/security/encode_decode');

router.post('/encode', async (req, res) => {
    try {
        const result = await encodeDecode.encode(req.query.text);
        resHelper.sendResponse(res, result);
    } catch (error) {
        resHelper.sendError(res, error)
    }
})

router.post('/decode', async (req, res) => {
    try {
        const result = await encodeDecode.decode(req.query.text);
        resHelper.sendResponse(res, result);
    } catch (error) {
        resHelper.sendError(res, error)
    }
})

module.exports = router;