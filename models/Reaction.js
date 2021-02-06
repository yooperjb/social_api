// import Schema and model from mongoose
const { Schema, model, Types } = require('mongoose');

//This will not be a model, but rather used as the reaction field's subdocument schema in the Thought model.
// I really don't know what that means
const ReactionSchema = new Schema({

    // set custom id to avoid confusion with parent _id 
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // use getter method to format timestamp
        //get: createdAtVal => dateFormat(createdAtVal)
    }
});

// create the Reaction model using the ReactionSchema
const Reaction = model("Reaction", ReactionSchema);

// export the User model
module.exports = Reaction;