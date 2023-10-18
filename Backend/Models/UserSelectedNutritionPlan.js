import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSelectedNutritionPlan = new Schema({
  usplanID: {
    type: String,
    required: true,
  },
  ususerID: {
    type: String,
    required: true,
  },
  usNPlanID: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export default mongoose.model("userselectednutritionplan", userSelectedNutritionPlan);
