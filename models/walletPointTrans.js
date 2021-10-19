import sequelize_pkg from 'sequelize'
import { sequelize } from './base.js'
import User from './user.js'
const { DataTypes, Model } = sequelize_pkg

class WalletPointTrans extends Model { }
WalletPointTrans.init(
    {
        orderId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        status: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        paidAt: {
            type: DataTypes.DATE,
        },
        walletPoint: {
            type: DataTypes.DECIMAL,
            defaultValue: 0
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        snapToken: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        modelName: 'walletPointTrans'
    }
)

WalletPointTrans.belongsTo(User, { as: 'Customer', foreignKey: 'customerUsername', targetKey: 'username' })

WalletPointTrans.sync({ alter: true })

export default WalletPointTrans
