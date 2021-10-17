import { Router } from 'express'
import { body, param } from 'express-validator'
import { fetchAll, getOne, register } from '../controllers/users.js'
import jwt_auth from '../middlewares/jwt_auth.js'
import { throw_if_error_basic } from '../middlewares/validator.js'

let router = Router()

router.post(
    "/register",
    body("username").notEmpty(),
    body("password").notEmpty(),
    body("name").notEmpty(),
    body("nip").notEmpty(),
    throw_if_error_basic,
    register
)

router.get(
    "",
    jwt_auth,
    fetchAll
)

router.get(
    "/:username",
    param("username").notEmpty(),
    jwt_auth,
    getOne
)

export default router