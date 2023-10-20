import express from "express";
import {MemberSignup, MemberLogin} from '../Controllers/MemberController.js'

const router = express.Router();

router.post('/signup', MemberSignup);
router.post('/login', MemberLogin);


export default router