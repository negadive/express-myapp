const User = require('../models/user')
const basicAuth = require('express-basic-auth')

const authorizer = async (username, password, callback) => {
    const IS_AUTHED = true
    const onResponse = (user) => {
        const USER_NOT_FOUND = (user === null)

        if (USER_NOT_FOUND) {
            return callback(null, !IS_AUTHED)
        }

        return callback(null, IS_AUTHED)
    }

    User.findOne({ where: { username, password } })
        .then(onResponse)
        .catch((err) => {
            throw err
        })
}

module.exports = basicAuth({
    authorizer: authorizer,
    authorizeAsync: true
})
