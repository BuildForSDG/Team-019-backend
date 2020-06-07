const ErrorResponse = require('../helpers/errorResponse');
const asyncHandler = require('../middlewares/async');
const Order = require('../models/Order')

export.checkout= asyncHandler(async (req, res) => {
    req.body.user = req.user.id
    
})