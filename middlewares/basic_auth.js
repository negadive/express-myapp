const User = require('../models/user')
const basicAuth = require('express-basic-auth')

const authorizer = async (username, password, callback) => {
    const user = await User.findOne({ where: { username: username, password: password } })
    if (user === null) {
        return callback(false, false)
    }

    return callback(true, true)
}

module.exports = basicAuth({
    authorizer: authorizer,
    authorizeAsync: true
})
