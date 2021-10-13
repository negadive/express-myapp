const User = require('../models/user')

module.exports.login = async (req, res) => {
    const { username, password } = req.body

    const user = await User.findOne({ where: { username: username, password: password } })
    if (user === null) {
        return res.status(404).json({ "errors": "User not found" })
    }

    res.json(user)
}