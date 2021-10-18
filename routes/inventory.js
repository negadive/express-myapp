import { Router } from 'express'
import { body, param } from 'express-validator'
import { addItem, fetchAll } from '../controllers/inventory.js'
import jwtAuth from '../middlewares/jwt_auth.js'

let router = Router({mergeParams: true})
router.use(
    param("username").notEmpty(),
)

router.post(
    "",
    body("itemId").notEmpty().isInt(),
    body("itemOption").isInt(),
    body("itemSeries").isInt(),
    jwtAuth,
    addItem
)

router.get(
    "",
    jwtAuth,
    fetchAll
)

export default router
