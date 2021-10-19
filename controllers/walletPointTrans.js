import WalletPointTrans from "../models/walletPointTrans.js";
import { v4 as uuidv4 } from "uuid";
import { snap } from '../lib/midtrans.js'

export const store = async (req, res, next) => {
    const { walletPoint } = req.body

    try {
        const walletPointTrans = await WalletPointTrans.create({
            orderId: uuidv4(),
            status: 'CREATED',
            customerUsername: req.user.username,
            walletPoint,
            price: (walletPoint * 1)
        })

        return res.status(201).json(walletPointTrans)
    }
    catch (err) { next(err) }
}

export const getToken = async (req, res, next) => {
    const { orderId } = req.params

    const walletPointTrans = await WalletPointTrans.findByPk(orderId)
    const MTTransParam = {
        transaction_details: {
            order_id: walletPointTrans.orderId,
            gross_amount: walletPointTrans.price
        }
    }

    if (walletPointTrans.snapToken === null) {
        const { token: snapToken } = await snap.createTransaction(MTTransParam)

        walletPointTrans.snapToken = snapToken
        walletPointTrans.status = 'TOKEN_MADE'
        await walletPointTrans.save({ fields: ['snapToken', 'status'] })

        return res.status(201).json({ snapToken })
    }

    res.json({ snapToken: walletPointTrans.snapToken })
}