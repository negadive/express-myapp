import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const create_token = (username) => {
    const { JWT_SECRET: secret, JWT_ISSUER: issuer, JWT_AUDIENCE: audience } = process.env
    const algorithm = process.env.JWT_ALGO

    const token = jwt.sign(
        { username },
        secret,
        {
            algorithm,
            expiresIn: "3h",
            issuer,
            audience
        }
    )

    return token
}

export async function login(req, res) {
    const { username, password } = req.body

    const user = await User.findOne({ where: { username: username, password: password } })
    if (user === null) {
        return res.status(404).json({ "errors": "User not found" })
    }

    res.json({ token: create_token(user.username) })
}

export async function logout(req, res) {
    res.status(204).json(null)
}