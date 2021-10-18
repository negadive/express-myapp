import sequelize_pkg from 'sequelize'
import { sequelize } from './base.js'
import User from './user.js'
const { DataTypes, Model } = sequelize_pkg

class Inventory extends Model { }
Inventory.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        ownerUsername: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        itemId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        itemOption: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        itemSeries: {
            type: DataTypes.BIGINT,
            defaultValue: 0
        }
    },
    {
        sequelize,
        modelName: 'inventory'
    }
)

// relations
User.hasMany(Inventory, { foreignKey: 'ownerUsername', sourceKey: 'username' });
Inventory.belongsTo(User, { as: 'Owner', foreignKey: 'ownerUsername', targetKey: 'username' });

Inventory.sync({ alter: true })

export default Inventory
