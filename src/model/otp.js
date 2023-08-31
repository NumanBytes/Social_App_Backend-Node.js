import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    number: {
        type: number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    
}, {
    timestamps: Date
}
);

const otpModel = mongoose.model('OTP', otpSchema);
export default otpModel;