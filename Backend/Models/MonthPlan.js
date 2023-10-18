import mongoose from "mongoose";
const Schema = mongoose.Schema;

const monthPlanSchema = new Schema({
  monthPlanId: {
    type: String,
    required: true,
  },
  monthPlanName: {
    type: String,
    required: true,
  },
  springOne: [{
    type: String,
    required: true,
  }],
  springTwo: [{
    type: String,
    required: true,
  }],
  springTree: [{
    type: String,
    required: true,
  }],
  springFour: [{
    type: String,
    required: true,
  }]
});

export default mongoose.model("monthplans", monthPlanSchema);
