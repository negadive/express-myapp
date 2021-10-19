import midtransClient from 'midtrans-client'

export const snap = new midtransClient.Snap({
    isProduction: Boolean(parseInt(process.env.MIDTRANS_IS_PRODUCTION)),
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
})
