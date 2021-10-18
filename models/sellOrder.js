import sequelize_pkg from 'sequelize'
import { sequelize } from './base.js'
import Inventory from './inventory.js'
const { DataTypes, Model } = sequelize_pkg

class SellOrder extends Model { }
SellOrder.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'sell_order'
    }
)

SellOrder.belongsTo(Inventory)

SellOrder.sync({ alter: true })

export default SellOrder
