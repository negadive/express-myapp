import { Router } from 'express'
import { body } from 'express-validator'
import { makeSellOrder, fetchAll } from '../controllers/sellOrder.js'
import jwt_auth from '../middlewares/jwt_auth.js'
import { throw_if_error_basic } from '../middlewares/validator.js'

let router = Router()

router.post(
    "",
    jwt_auth,
    body("inventoryId").notEmpty().isInt(),
    body("price").notEmpty().isDecimal(),
    throw_if_error_basic,
    makeSellOrder
)

router.get(
    "",
    jwt_auth,
    fetchAll
)

export default router