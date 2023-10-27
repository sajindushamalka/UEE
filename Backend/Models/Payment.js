import mongoose from "mongoose";
const Schema = mongoose.Schema;


const PaymentSchema = new Schema({
    paymentId: {
        type: String,
        required: true,
    },
    memberId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,  
    },
    nextDate: {
        type: String,
        required: true,  
    },
    lastDate: {
        type: String,
        required: true,  
    },
    amount: {
        type: Number,
        required: true,
    },
    rewards: {
        type: Number,
        required: true,
    },
    gymName: {
        type: String,
        required: true,  
    },
   

}, { timestamps: true })

export default mongoose.model("Payment", PaymentSchema)