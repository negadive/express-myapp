import User from '../models/user.js'

export async function register(req, res, next) {
    const { username, password, name, nip } = req.body

    try {
        const user = await User.create({ username, password, name, nip })

        res.status(201).json(user)
    }
    catch (err) {
        next(err)
    }
}

export async function fetchAll(req, res) {
    const { limit, offset } = req.query

    const total = await User.count()
    var data = await User.findAll({ limit, offset })

    res.json({ total, data })
}

export async function getOne(req, res) {
    const { username } = req.params

    const user = await User.findOne({ where: { username } })
    if (user === null) {
        return res.status(404).json({ errors: "User not found" })
    }

    res.json(user)
}
