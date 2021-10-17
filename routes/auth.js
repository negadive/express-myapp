import { Router } from "express"
import { body } from 'express-validator'
import { login, logout } from "../controllers/auth.js"
import { throw_if_error_basic } from '../middlewares/validator.js'

var router = Router()

router.post(
    "/login",
    body("username").notEmpty(),
    body("password").notEmpty(),
    throw_if_error_basic,
    login
)

router.post(
    "/logout",
    logout
)

export default router