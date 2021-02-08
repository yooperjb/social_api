const router = require('express').Router();
// import controller objects
const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, createReaction, deleteReaction} = require('../../controllers/thought-controller');

// GET all Thoughts /api/thoughts
router
    .route('/')
    .get(getAllThoughts);

// Create Thought /api/thoughts/:userId
router
    .route('/:userId')
    .post(createThought);

// GET one, PUT one, and DELETE one thought at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)

// DELETE thought by user /api/thoughts/:userId/:thoughtId
router
    .route('/:userId/:thoughtId')
    .delete(deleteThought);

// Create thought reaction /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction);

// Delete a thought reaction /api/thoughts/:thoughtId/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router;