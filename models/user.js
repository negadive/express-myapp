const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('./base')

class User extends Model { }
User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nip: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        sequelize,
        modelName: 'User'
    }
)

User.sync({ alter: true })

module.exports = User