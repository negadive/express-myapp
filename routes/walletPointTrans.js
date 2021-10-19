import { Router } from "express"
import jwt_auth from "../middlewares/jwt_auth.js"
import { getToken, store } from '../controllers/walletPointTrans.js'

const router = Router()

router.post(
    "",
    jwt_auth,
    store
)

router.post(
    "/:orderId/getSnapToken",
    jwt_auth,
    getToken
)

export default router