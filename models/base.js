import dotenv from 'dotenv'
dotenv.config({ debug: process.env.DEBUG })

import Sequelize from "sequelize";

const {
    DB_HOST: host,
    DB_USER: user,
    DB_PASSWORD: password,
    DB_DB: db,
    DB_DIALECT: dialect,
    DB_POOL_MAX: pool_max,
    DB_POOL_MIN: pool_min,
    DB_POOL_ACQUIRE: pool_acq,
    DB_POOL_IDLE: pool_idle,
} = process.env

export const sequelize = new Sequelize(
    db,
    user,
    password,
    {
        host,
        dialect,
        operatorsAliases: false,
        pool: {
            max: parseInt(pool_max),
            min: parseInt(pool_min),
            acquire: parseInt(pool_acq),
            idle: parseInt(pool_idle)
        }
    }
);
