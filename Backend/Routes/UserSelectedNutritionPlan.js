import express from "express";
import {addUSPlan} from '../Controllers/UserSelectedNutritionPlan.js'
const router = express.Router();

router.post("/add", addUSPlan);

export default router;
