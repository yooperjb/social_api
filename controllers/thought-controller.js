const { Thought, User } = require('../models');

// create thoughController object
const thoughtController = {
    // get all Thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            // .populate({
            //     path: 'comments',
            //     select: '-__v'
            // })
            .select('-__v')
            // .sort({ _id: -1 })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get single Thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            // .populate({
            //     path: 'comments',
            //     select: '-__v'
            // })
            .select('-__v')
            .then(dbThoughtData => {
                // If no Thought is found, send 404
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No Thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create Thought add to user
    createThought({ params, body }, res) {
        //console.log("Body: ", body);
        //console.log("Params: ", params);
        
        
        Thought.create(body)
        .then(({ _id }) => {
            //console.log("_id:", _id)
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: _id } },
                { new: true }
            );
        })
        .then(dbUserData => {
            if (!dbUserData){
                res.status(404).json({ message: 'No User found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },

    // update Thought by id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No Thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete Thought by Id
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
        .then(deletedThought => {
            if(!deletedThought) {
                res.status(404).json({ message: 'No Thought found with this id!'});
                return;
            }
            return User.findOneAndUpdate(
                { _id: params.userId},
                { $pull: { thoughts: params.thoughtId }},
                { new: true}
            );
            //res.json(dbThoughtData);
        })
        .then(dbUserData => {
            if (!dbUserData){
                res.status(404).json({ message: "No user found with this Id!" });
                return;
            }
            res.json(dbUserData);
        }) 
        .catch(err => res.status(400).json(err));
    },

    // create reaction to thought
    createReaction({ params, body }, res) {
        console.log("Body: ", body);
        console.log("Params: ", params);
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData){
                res.status(404).json({ message: 'No Thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete Reaction by Id
    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId  }}},
            { new: true }
        )
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'No Thought found with this id!'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },
}

module.exports = thoughtController;