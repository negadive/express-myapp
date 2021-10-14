const { body } = require('express-validator')
let router = require('express').Router()
const userController = require('../controllers/users')
const { throw_if_error_basic } = require('../middlewares/validator')
const basicAuth = require('../middlewares/basic_auth')

router.post(
    "/register",
    body("username").notEmpty(),
    body("password").notEmpty(),
    body("name").notEmpty(),
    body("nip").notEmpty(),
    throw_if_error_basic,
    userController.register
)

router.get(
    "",
    basicAuth,
    userController.fetchAll
)

module.exports = router