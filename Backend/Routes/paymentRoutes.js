import express from 'express';
import { createPayment, changeStatus, getbyUser } from '../Controllers/PaymentController.js';

const router = express.Router();

router.post("/newPayment", createPayment);
router.post("/check", createPayment);
router.post("/getAll", getbyUser);


export default router;