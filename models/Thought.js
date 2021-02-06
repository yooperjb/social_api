// import Schema and model from mongoose
const { Schema, model, Types } = require('mongoose');
//const dateFormat = require('../utils/dateFormat');
const moment = require('moment');

const ReactionSchema = new Schema({
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
        // format date using moment
        get: (createdAtVal) => moment(createdAtVal).format('dddd, MMMM do YYYY, h:mm:ss a')
    }
},    
{
    toJSON : {
        virtuals: true,
        getters: true
    },
    // set id to false since we don't need it for virtual
    id: false
});

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
        // format date using moment
        get: (createdAtVal) => moment(createdAtVal).format('dddd, MMMM do YYYY, h:mm:ss a')
    },
    // which user created the thought
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
        // set id to false since we don't need it for virtual
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