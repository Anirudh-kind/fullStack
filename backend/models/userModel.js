import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, 'add the user name']
    },
})

