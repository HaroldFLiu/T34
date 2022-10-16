const express = require('express');
const { default: mongoose } = require('mongoose');
const upload = require('../middleware/multer');
const cloudinary = require('../middleware/cloudinary');
const {
    getGroups,
    getGroup,
    getGroupItems,
    deleteGroup,
    getGroupMembers,
    getGroupsByUser,
} = require('../controllers/groupController')

const groupService = require('../services/group');

const router = express.Router();

// GET all groups
router.get('/groups', getGroups);

// GET a group
router.get('/groups/:group_id', getGroup, getGroupItems);

// GET group members
router.get('/groups/:group_id/members', getGroupMembers);

// GET a user's groups
router.get('/groups/:user_id', getGroupsByUser);

// POST a group
router.post('/groups', async (req, res) => {
    const {name, description, members, admins, icon_url} = req.body;

    try {
        const group = await groupService.create({name, description, members, admins, icon_url});

        res.status(200).json(group);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

// DELETE a group
router.delete('/groups/:group_id', deleteGroup);

// UPDATE a group
router.patch('/groups/:group_id', async (req, res) => {
    const { group_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(group_id)) {
        return res.status(404).json({error: 'Invalid Mongo ID'});
    }

    const group = await groupService.readById(group_id);

    if (!group) {
        return res.status(404).json({error: 'Group does not exist with ID'});
    }

    for (const property in req.body) {
        group[property] = req.body[property];
    }
    
    await group.save();

    res.status(200).json(group);
});

// ADD group members
router.patch('/groups/:group_id/add/:user_id', async (req, res) => {
    const { group_id, user_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(group_id) || !mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(404).json({error: 'Invalid Mongo ID'});
    }

    try {
        const group = await groupService.joinGroup(group_id, user_id);

        res.status(200).json(group);
    } catch (error) {
        res.status(401).json({err: error.message});
    }

})

// LEAVE group
router.patch('/groups/:group_id/leave/:user_id', async (req, res) => {
    const { group_id, user_id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(group_id) || !mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(404).json({error: 'Invalid Mongo ID'});
    }

    try {
        const group = await groupService.leaveGroup(group_id, user_id);

        res.status(200).json(group);
    } catch (error) {
        res.status(401).json({err: error.message});
    }

})
module.exports = router;
