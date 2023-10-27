import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const timetableSchema = new Schema({

    TID: {
        type: String,
        required: true
    },
    memberId: {
        type: String,
        required: true
    },
    gymName: {
        type: String,
        required: true
    },
    timeTable: []
})

export default mongoose.model("timeTable", timetableSchema)