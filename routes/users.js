const { body } = require('express-validator')
let router = require('express').Router()
const userController = require('../controllers/users')
const { throw_if_error_basic } = require('../middlewares/validator')


router.post(
    "/register",
    body("username").notEmpty(),
    body("password").notEmpty(),
    body("name").notEmpty(),
    body("nip").notEmpty(),
    throw_if_error_basic,
    userController.register
)

module.exports = router