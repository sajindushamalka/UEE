import express from "express";
import { AdminLogin, AdminSignup, tokenRefresh } from '../Controllers/AdminController.js'

const router = express.Router();

router.post('/signup', AdminSignup);
router.post('/login', AdminLogin);
router.post('/token', tokenRefresh);



export default router