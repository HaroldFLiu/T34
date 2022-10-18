const { default: mongoose } = require('mongoose');
const groupService = require('../services/group');
const itemService = require('../services/item');
const userService = require('../services/user');

const createGroup = async (req, res) => {
    const {name, description, members, admins } = req.body;

    try {
        const group = await groupService.create({name, description, members, admins });
        res.status(200).json(group);
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

const getGroupsByUser = async (req, res) => {
    const { user_id } = req.params;
    const groups = await groupService.readByUser(user_id);

    res.status(200).json(groups);
}

const getOtherGroups = async (req, res) => {
    const { user_id } = req.params;
    const groups = await groupService.readOtherGroups(user_id);

    res.status(200).json(groups);
}

const getGroup = async (req, res) => {
    const { groupId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(groupId)) {
        return res.status(404).json({error: 'Invalid Mongo ID'});
    }

    const group = await groupService.readById(groupId);

    if (!group) {
        return res.status(404).json({error: 'Group does not exist'});
    }

    console.log(group);

    res.status(200).json(group);
}

const getGroupMembers = async (req, res) => {
    const { groupId } = req.params;
    const group = await groupService.readById(groupId);

    if (!group) {
        return res.status(404).json({error: 'No group with that ID'});
    }

    let groupMembers = []

    for (const userId of group.members) {
        const user = await userService.readById(userId);
        groupMembers.push(user);
    }

    let groupAdmins = []

    for (const userId of group.admins) {
        const user = await userService.readById(userId);
        groupAdmins.push(user);
    }
    
    const data = {
        members: groupMembers, 
        admins: groupAdmins
    }

    console.log(data);
    res.status(200).json(data);
}

const getGroupItems = async (req, res) => {
    const { group_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(group_id)) {
        return res.status(404).json({error: 'Invalid Mongo ID'});
    }

    const items = await itemService.readByGroup(group_id);

    if (!items) {
        return res.status(404).json({error: 'Group items do not exist'});
    }

    res.status(200).json(items);
}

const getGroupItemsWithCategory = async (req, res) => {
    const { group_id, category_id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(group_id) || !mongoose.Types.ObjectId.isValid(category_id)) {
        return res.status(404).json({error: 'Invalid Mongo ID'});
    }

    const items = await itemService.readByGroup(group_id);
    const filtered = await itemService.readByCategory(category_id, items);

    if (!filtered) {
        return res.status(404).json({error: 'Group items with category do not exist'});
    }

    res.status(200).json(filtered);
}

const deleteGroup = async (req, res) => {
    const { group_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(group_id)) {
        return res.status(404).json({error: 'Invalid Mongo ID'});
    }

    const group = await groupService.deleteById(group_id);

    if (!group) {
        res.status(200).json({mssg: 'Group deleted successfully'});
    }
}

const updateGroup = async (req, res) => {
    const { group_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(group_id)) {
        return res.status(404).json({error: 'Invalid Mongo ID'});
    }

    const group = await groupService.updateById(group_id, req.body);

    if (!group) {
        return res.status(404).json({error: 'Group does not exist'});
    }

    res.status(200).json(group);
}

module.exports = {
    createGroup,
    getGroups,
    deleteGroup,
    updateGroup,
    getGroup,
    getGroupItems,
    getGroupItemsWithCategory,
    getGroupMembers,
    getGroupsByUser,
    getOtherGroups
}