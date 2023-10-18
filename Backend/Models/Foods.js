import mongoose from "mongoose";
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  foodId: {
    type: String,
    required: true,
  },
  foodName: {
    type: String,
    required: true,
  },
  foodCalorie: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("foods", foodSchema);
