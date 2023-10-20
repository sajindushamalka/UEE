import express from "express";
import multer from 'multer'
import { AdminLogin, AdminSignup, tokenRefresh } from '../Controllers/AdminController.js'

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (re, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    },
})

const upload = multer({ storage });

router.post('/signup', upload.single('logoImg'), AdminSignup)
router.post('/login', AdminLogin)
router.post('/token', tokenRefresh);



export default router