const router = require('express').Router();
// import controller objects
//const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../../controllers/user-controller');
const { createUser, getAllUsers, getUserById, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// ADD and DELETE user friend /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;