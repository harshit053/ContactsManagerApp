var mongoose = require("mongoose");

// Mongoose Contacts Schema
var contactSchema = new mongoose.Schema({
    name: String,
    phno: Number,
    email: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }
});

module.exports = mongoose.model("Contact", contactSchema);