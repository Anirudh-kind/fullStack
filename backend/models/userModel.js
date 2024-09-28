import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "add the user name"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "add the user name"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "add the user name"],
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.model('User', userSchema);