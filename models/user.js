const mongoose = require("mongoose")

module.exports = mongoose.model("user" , mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String
    },
    birthdate :Date,
    photo_url : String,
    age :Number,
    bio : String
}))