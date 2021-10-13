const { validationResult } = require('express-validator')

module.exports.throw_if_error_basic = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    next()
}