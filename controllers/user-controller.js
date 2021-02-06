const { User } = require('../models');

// create userController object
const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            // .populate({
            //     path: 'comments',
            //     select: '-__v'
            // })
            // removes __v version from query
            .select('-__v')
            // .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    
    // get single user by id with thoughts and friends
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            // .populate({
            //     path: 'comments',
            // })
            .select('-__v')
            .then(dbUserData => {
                // If no User is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    
    // createUser ------*
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },
    
    // update User by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No User found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
    
    // delete User by Id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!'});
                return;
            }
            //res.json(dbUserData);
            res.json({message: "User deleted!"})
        })
        .catch(err => res.status(400).json(err));
    }
}

module.exports = userController;