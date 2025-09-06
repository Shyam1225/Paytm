const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Shyam:Shyam_1225@cluster0.by8z1jv.mongodb.net/paytm");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password: {
        type:String,
        required:true,
        minLength:6,
    },
    firstName: {
        type: String,
        required: true,
        trim:true,
        maxLength:50
    },
    lastName: {
        type: String,
        required: true,
        trim:true,
        maxLength:50
    },
})

const User = mongoose.model("User", userSchema);

module.exports = {
    User
}
