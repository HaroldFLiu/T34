const { default: mongoose } = require('mongoose');
const groupService = require('../services/group');

const createGroup = async (req, res) => {
    const {name, description, members, admins } = req.body;

    try {
        const group = await groupService.create({name, description, members, admins });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getGroups = async (req, res) => {
    const groups = await groupService.readAll();

    if (!groups) {
        return res.status(404).json({error: 'No groups'});
    }

    res.status(200).json(groups);
}

const getGroup = async (req, res) => {
    const { group_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(group_id)) {
        return res.status(404).json({error: 'Group does not exist'});
    }

    const group = await groupService.readById(group_id);

    if (!group) {
        return res.status(404).json({error: 'Group does not exist'});
    }

    res.status(200).json(group);
}

const deleteGroup = async (req, res) => {
    const { group_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(group_id)) {
        return res.status(404).json({error: 'Group does not exist'});
    }

    const group = await groupService.deleteById(group_id);

}

const updateGroup = async (req, res) => {
    const { group_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(group_id)) {
        return res.status(404).json({error: 'Group does not exist'});
    }

    const group = await groupService.updateItem(group_id, req.body);

    if (!group) {
        return res.status(404).json({error: 'ItGroupem does not exist'});
    }

    res.status(200).json(group);
}

module.exports = {
    createGroup,
    getGroups,
    deleteGroup,
    updateGroup,
    getGroup,
}