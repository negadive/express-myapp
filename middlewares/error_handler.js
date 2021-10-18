import { ValidationError } from "sequelize/lib/errors/index.js";

class PublicValidationErrorItem {
    constructor({ message, value }) {
        this.message = message
        this.value = value
    }
}

export const sequelize_err_handler = async (err, req, res, next) => {
    if (err instanceof ValidationError) {
        const errors = []
        err.errors.forEach(elm => {
            errors.push(
                new PublicValidationErrorItem(elm)
            )
        });
        return res.status(400).json({ errors: errors })
    }

    next(err)
}