const User = require('../models/user')
const { UniqueConstraintError } = require('sequelize/lib/errors')

module.exports.register = async (req, res) => {
    const data = { username, password, name, nip } = req.body

    try {
        const user = await User.create(data)

        res.status(201).json(user)
    }
    catch (err) {
        if (err instanceof UniqueConstraintError) {
            res.status(400).json({ errors: "User not unique" })
        }

        throw err
    }
}

module.exports.fetchAll = async (req, res) => {
    const { limit, offset } = req.query

    var { rows: data, total } = await User.findAndCountAll({ limit, offset })

    res.json({ total, data })
}

module.exports.getOne = async (req, res) => {
    const { username } = req.params

    const user = await User.findOne({ where: { username } })
    if (user === null) {
        return res.status(404).json({ errors: "User not found" })
    }

    res.json(user)
}
