import mongoose, { Schema } from "mongoose";
const Scehema = mongoose.Schema;

const RewardSchema = new Schema({

    RID: {
        type: String,
        Required: true
    },
    memberId: {
        type: String,
        Required: true
    },
    count: {
        type: String,
        Required: true
    }
})

export default mongoose.modelNames("Reward", RewardSchema)