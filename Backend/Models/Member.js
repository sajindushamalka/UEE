import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    memberId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,  
    },
    mobileNo: {
        type: String,
        required: true,  
    },
    address: {
        type: String,
        required: true,  
    },
    height: {
        type: String,
        required: true,  
    },
    weight: {
        type: String,
        required: true,  
    },
    rewards: {
        type: Number
    },
    paymentStatus: {
        type: String,
        required: true,  
    },
    gymName: {
        type: String,
        required: true,  
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

}, { timestamps: true })

export default mongoose.model("Member", MemberSchema)