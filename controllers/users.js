const User = require('../models/user')
const sequelizeErrors = require('sequelize/lib/errors')

module.exports.register = async (req, res) => {
    const data = { username, password, name, nip } = req.body

    try {
        let user = await User.create(data)

        res.status(201).json(user)
    }
    catch (err) {
        if (err instanceof sequelizeErrors.UniqueConstraintError) {
            res.status(400).json({ errors: "User not unique" })
        }

        throw err
    }
}