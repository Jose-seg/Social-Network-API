const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController');

const {
    addReaction,
    removeReaction
} = require('../../controllers/reactionController')

router.route('/')
    .get(getAllThoughts)
    .post(createThought);


router.route('/:id')
    .get(getThoughtsById)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);


module.exports = router;