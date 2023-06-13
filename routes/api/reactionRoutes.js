// This route handles the reaction operation by adding or removing
const router = require('express').Router();
const {
    addReaction,
    removeReaction
} = require('../../controllers/reactionController');


router.route('/:thoughtId/reactions')
    .post(addReaction)


router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);


module.exports = router;