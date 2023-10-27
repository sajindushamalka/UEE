import { insertTime, checkTime, gettimeTable, getUserTime } from "../Controllers/timeController.js";
import express from 'express'

const router = express.Router();

router.post("/insert", insertTime)
router.post("/check", checkTime)
router.post("/get", gettimeTable)
router.post("/getUser", getUserTime)

export default router;