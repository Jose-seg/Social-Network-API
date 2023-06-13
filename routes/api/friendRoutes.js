// This route will handle the friend operation such as adding and removing
const router = require('express').Router();
const {
    addFriend,
    removeFriend
} = require('../../controllers/friendController')

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;