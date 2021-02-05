// import Schema and model from mongoose
const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        //must be between 1-280 characters
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // formate date using dataFormat() function
        //get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true,
    },
    // reactions (replies) created with the ReactionSchema
    reactions: [ReactionSchema]
},    
    {
        toJSON : {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of thought's reactions on retrieval
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

// create the Thought model using the ThoughtSchema
const Thought = model("Thought", ThoughtSchema);

// export the User model
module.exports = Thought;