import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isPremium: {
        type: Boolean,
        default: false,
    },
});

const user = mongoose.model("User", userSchema);

export default user;
