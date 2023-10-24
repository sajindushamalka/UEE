import mongoose from "mongoose";
const Schema = mongoose.Schema;

const weekPlanSchema = new Schema({
  weekPlanId: {
    type: String,
    required: true,
  },
  weekPlanName: {
    type: String,
    required: true,
  },
  Monday: [{
    type: String,
    required: true,
  }],
  Tuesday: [{
    type: String,
    required: true,
  }],
  Wednesday: [{
    type: String,
    required: true,
  }],
  Thursday: [{
    type: String,
    required: true,
  }],
  Friday: [{
    type: String,
    required: true,
  }],
  Saturday: [{
    type: String,
    required: true,
  }],
  Sunday: [{
    type: String,
    required: true,
  }],
});

export default mongoose.model("weekplans", weekPlanSchema);
