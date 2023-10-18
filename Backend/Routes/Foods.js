import express from "express";
import {addFood, getAllFoods, getOneFood, updateFood, deleteFood} from '../Controllers/Foods.js'
const router = express.Router();

router.post("/add", addFood);
router.get("/all", getAllFoods);
router.get("/one/:id", getOneFood);
router.put("/update/:id", updateFood);
router.delete("/delete/:id", deleteFood);

export default router;
