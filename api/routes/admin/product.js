const express = require('express');
const resHelper = require('../../shared/helpers/resHandler.helper')
const productHandler = require('../../core/admin/product/product.handler');

const router = express.Router();

router.get('', async (req, res) => {
    try {
        const result = await productHandler.test(req.query, res.locals)
        resHelper.sendResponse(res, result);
    } catch (error) {
        resHelper.sendError(res, error);
    }
})

module.exports = router
