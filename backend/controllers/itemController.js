const { itemService } = require('../../../../services/item');

const createItem = async (req, res) => {
    const {name, description, category, price, seller} = req.body;

    try {
        const item = await itemService.create({name, description, category, price, seller});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}