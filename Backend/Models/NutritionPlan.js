import mongoose from "mongoose";
const Schema = mongoose.Schema;

const nutritionSchema = new Schema({
  nutritionId: {
    type: String,
    required: true,
  },
  nutritionType: {
    type: String,
    required: true,
  },
  nutritionPlanId: {
    type: String,
    required: true,
  },
  nutritionPlanDuration: {
    type: String,
    required: true,
  },
});

export default mongoose.model("nutritionsplan", nutritionSchema);
