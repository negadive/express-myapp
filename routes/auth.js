const { body } = require('express-validator')
var authController = require("../controllers/auth.js")
const { throw_if_error_basic } = require('../middlewares/validator')

var express = require("express")
var router = express.Router()
const basicAuth = require('../middlewares/basic_auth')

router.post(
    "/login",
    body("username").notEmpty(),
    body("password").notEmpty(),
    throw_if_error_basic,
    authController.login
)

router.post(
    "/logout",
    basicAuth,
)

module.exports = router