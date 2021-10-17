import { Router } from 'express'
import { body, param } from 'express-validator'
import { fetchAll, getOne, register } from '../controllers/users.js'
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
    fetchAll
)

router.get(
    "/:username",
    param("username").notEmpty(),
    getOne
)

export default router