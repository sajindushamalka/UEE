import express, { Router } from 'express';
import { createPayment } from '../Controllers/PaymentController.js';

const router = express.Router();

router.post("/newPayment", createPayment);


export default router;