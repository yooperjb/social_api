const router = require('express').Router();
// import controller objects
const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought} = require('../../controllers/thought-controller');

// GET all Thoughts /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    

// Create Thought /api/thoughts/:userId
router
    .route('/:userId')
    .post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;