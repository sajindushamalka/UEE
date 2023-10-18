import mongoose from "mongoose";
const Schema = mongoose.Schema;

const treeMonthPlanSchema = new Schema({
  treeMonthPlanId: {
    type: String,
    required: true,
  },
  treeMonthPlanName: {
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
  }],
  springFive: [{
    type: String,
    required: true,
  }],
  springSix: [{
    type: String,
    required: true,
  }]
});

export default mongoose.model("treemonthplans", treeMonthPlanSchema);
