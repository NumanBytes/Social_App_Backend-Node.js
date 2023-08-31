import mongoose from "mongoose";

// create a user model

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true      //modification
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true
    }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;


