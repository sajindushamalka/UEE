import express from "express";
import {addNutrition,getAllNutritions,getOneNutrition,updateNutrition,deleteNutrion,searchNutrition} from '../Controllers/NutritionPlan.js'
const router = express.Router();

router.post("/add", addNutrition);
router.get("/all", getAllNutritions);
router.get("/one/:id", getOneNutrition);
router.put("/update/:id", updateNutrition);
router.delete("/delete/:id", deleteNutrion);
router.post("/search", searchNutrition);

export default router;
