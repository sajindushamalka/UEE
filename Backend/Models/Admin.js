import mongoose from "mongoose";
const Schema = mongoose.Schema;


const AdminSchema = new Schema({
    adminId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: String,
        required: true,  
    },
    gymName: {
        type: String,
        required: true,  
    },
    address: {
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

export default mongoose.model("Admin", AdminSchema)