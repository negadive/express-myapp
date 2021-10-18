import Inventory from "../models/inventory.js"
import SellOrder from '../models/sellOrder.js'

export const makeSellOrder = async (req, res, next) => {
    const { inventoryId, price } = req.body

    const inventory = await Inventory.findByPk(inventoryId)
    if (inventory === null) {
        return res.status(404).status({ errors: "Inventory not found" })
    }

    try {
        const _sellOrder = await SellOrder.create({ inventoryId, price })
        const sellOrder = await SellOrder.findByPk(_sellOrder.id, { include: Inventory })

        return res.status(201).json(sellOrder)
    }
    catch (err) { next(err) }
}

export const fetchAll = async (req, res) => {
    const { limit = 10, offset } = req.query

    const total = await Inventory.count()
    const data = await SellOrder.findAll({
        limit,
        offset,
        include: Inventory,
        order: ['price', 'ASC']
    })

    res.json({ total, data })
}