const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

// Collection

const Resisters = mongoose.model("resisters", userSchema);
module.exports = Resisters;