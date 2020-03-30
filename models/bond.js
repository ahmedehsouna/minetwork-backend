const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model("bond" , mongoose.Schema({
    first : {
        type : objectId,
        ref : 'user'
    },
    second : {
        type : objectId,
        ref : 'user'
    },
    type : {
        type : objectId,
        ref : 'type'
    },
    strength: {
        type : Number,
        default: 5
    }
}))