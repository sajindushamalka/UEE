import express from "express";
import {addPlan, getAllMonth, getOneMonths, updateMonth, deleteMonth} from '../Controllers/TreeMonthPlan.js'
const router = express.Router();

router.post("/add", addPlan);
router.get("/all", getAllMonth);
router.get("/one/:id", getOneMonths);
router.put("/update/:id", updateMonth);
router.delete("/delete/:id", deleteMonth);

export default router;
