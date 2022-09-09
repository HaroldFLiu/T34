const express = require('express');
const { default: mongoose } = require('mongoose');
const upload = require('../middleware/multer');
const cloudinary = require('../middleware/cloudinary');
const {
    createGroup,
    getGroups,
    getGroup,
    deleteGroup,
    updateGroup,
} = require('../controllers/groupController')

const groupService = require('../services/group');

const router = express.Router();

// GET all groups
router.get('/', getGroups);

// GET a group
router.get('/:group_id', getGroup);

// POST a group
router.post('/', upload.single('image'), async (req, res) => {
    const file = req.file;
    let icon_url, cloudinary_id;

    try {
        const result = await cloudinary.uploader.upload(file.path);
        icon_url = result.secure_url;
        cloudinary_id = result.public_id;
    } catch (err) {
        console.log(err);
    }

    const {name, description, members, admins} = req.body;

    try {
        const group = await groupService.create({name, description, members, admins, icon_url, cloudinary_id});

        res.status(200).json(group);
    } catch (error) {
        res.status(400).json({error: error.message})
    }

});

// DELETE a group
router.delete('/:group_id', deleteGroup);

// UPDATE a group
router.patch('/:group_id', upload.single('image'), async (req, res) => {
    const { group_id } = req.params;
    let icon_url, cloudinary_id;
    const file = req.file;

    try {
        const result = await cloudinary.uploader.upload(file.path);
        icon_url = result.secure_url
        cloudinary_id = result.public_id
    } catch (err) {
        console.log(err);
    }

    if (!mongoose.Types.ObjectId.isValid(group_id)) {
        return res.status(404).json({error: 'Invalid id'});
    }

    const group = await groupService.readById(group_id);

    for (const property in req.body) {
        group[property] = req.body[property];
    }

    await cloudinary.uploader.destroy(group.cloudinary_id);
    group.icon_url = icon_url;
    group.cloudinary_id = cloudinary_id;
    
    await group.save();

    if (!group) {
        return res.status(404).json({error: 'Group does not exist'});
    }

    res.status(200).json(group);
});

module.exports = router;
