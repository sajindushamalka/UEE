import express from "express";
import {addPlan, getAllWeek, getOneWeek, updateWeek, deleteWeek} from '../Controllers/WeekPlan.js'
const router = express.Router();

router.post("/add", addPlan);
router.get("/all", getAllWeek);
router.get("/one/:id", getOneWeek);
router.put("/update/:id", updateWeek);
router.delete("/delete/:id", deleteWeek);

export default router;
