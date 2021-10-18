import sequelize_pkg from 'sequelize'
import { sequelize } from './base.js'
const { DataTypes, Model } = sequelize_pkg

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
        }
    },
    {
        sequelize,
        modelName: 'User'
    }
)

User.sync({ alter: true })

export default User
