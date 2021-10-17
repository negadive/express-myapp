import jwt from 'express-jwt';

const { JWT_SECRET: secret, JWT_ISSUER: issuer, JWT_AUDIENCE: audience } = process.env
const algorithms = process.env.JWT_ALGO.split(",")

export default jwt({ secret, algorithms, audience, issuer })
