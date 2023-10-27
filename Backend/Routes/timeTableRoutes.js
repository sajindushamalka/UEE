import { insertTime, checkTime } from "../Controllers/timeController.js";
import express from 'express'

const router = express.Router();

router.post("/insert", insertTime)
router.post("/check", checkTime)

export default router;