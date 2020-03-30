const mongoose = require("mongoose")

module.exports = mongoose.model("type" , mongoose.Schema({
    name : String
}))