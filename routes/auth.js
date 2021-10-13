const { body } = require('express-validator')
var authController = require("../controllers/auth.js")

var express = require("express")
var router = express.Router()
const basicAuth = require('../middlewares/basic_auth')

router.post(
    "/login",
    body("username").notEmpty(),
    body("password").notEmpty(),
    authController.login
)

router.post(
    "/logout",
    basicAuth,
)

module.exports = router