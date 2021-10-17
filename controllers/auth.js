import User from '../models/user.js'

export async function login(req, res) {
    const { username, password } = req.body

    const user = await User.findOne({ where: { username: username, password: password } })
    if (user === null) {
        return res.status(404).json({ "errors": "User not found" })
    }

    res.json(user)
}

export async function logout(req, res) {
    res.status(204).json(null)
}