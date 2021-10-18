import Inventory from "../models/inventory.js";

export const addItem = async (req, res, next) => {
    const { itemId, itemOption, itemSeries } = req.body
    const itemSeriesCount = itemSeries ? await Inventory.count({ where: { itemSeries } }) : 0
    if (itemSeriesCount) {
        return res.status(400).json({ errors: { message: "itemSeries must be unique", value: itemSeries } })
    }

    try {
        const inventory = await Inventory.create({
            ownerUsername: req.params.username,
            itemId,
            itemOption,
            itemSeries
        })

        return res.status(201).json(inventory)
    }
    catch (err) { next(err) }
}

export const fetchAll = async (req, res) => {
    const { limit = 10, offset } = req.query
    const { username: ownerUsername } = req.params

    const total = await Inventory.count()
    const data = await Inventory.findAll({ where: { ownerUsername }, limit, offset })

    res.json({ total, data })
}
