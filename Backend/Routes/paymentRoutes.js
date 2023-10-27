import express from 'express';
import { createPayment, changeStatus } from '../Controllers/PaymentController.js';

const router = express.Router();

router.post("/newPayment", createPayment);
router.post("/check", createPayment);


export default router;