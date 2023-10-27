import admin from "../Models/Admin.js"
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

let refreshtokens = [];

export const AdminSignup = async (req, res) => {
    try {
        const existAdmin = await admin.findOne({ email: req.body.email });
        if (existAdmin) {
            res.status(400).json({
                message: 'Email already registered..!'
            })
        } else if (!existAdmin) {
            const prefix = "AID"
            const adminID = (prefix + "_" + Date.now())

            const HashPass = await bcrypt.hash(req.body.password, 10);
            const newAdmin = new admin({
                adminId: adminID,
                name: req.body.name,
                mobileNo: req.body.mobileNo,
                gymName: req.body.gymName,
                address: req.body.address,
                email: req.body.email,
                password: HashPass,
            })

            const newAccount = await newAdmin.save();
            if (newAccount) {
                res.status(201).json({
                    message: "Registration successfull..!",
                    payload: newAccount
                })
            } else {
                res.status(404).json({
                    message: 'Somthing went wrong creating account..!'
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong..!",
            error: error
        })
    }
}

export const AdminLogin = async (req, res) => {
    try {
        const registeredAdmin = await admin.findOne({ email: req.body.email })
        if (registeredAdmin) {
            const enteredPwd = req.body.password;
            const dbPwd = registeredAdmin.password;

            const chkPwd = await bcrypt.compare(enteredPwd, dbPwd);
            if (chkPwd) {
                const token = jwt.sign({ email: req.body.email }, process.env.JWT_TOKEN_KEY, { expiresIn: '10s' })
                const refreshtoken = jwt.sign({ email: req.body.email }, process.env.REFRESH_TOKEN_KEY, { expiresIn: '40s' })

                refreshtokens.push(refreshtoken);
                res.status(201).json({
                    message: 'Login Successfull..!',
                    token,
                    refreshtoken,
                    user: {
                        adminId: registeredAdmin.adminId,
                        name: registeredAdmin.name,
                        mobileNo: registeredAdmin.mobileNo,
                        gymName: registeredAdmin.gymName,
                        address: registeredAdmin.address,
                        email: registeredAdmin.email,
                    }
                })
            } else {
                res.status(404).json({
                    message: 'Incorrect password..!'
                })
            }
        } else {
            res.status(401).json({
                message: 'No account found under this email..!'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Somthing went wrong..!',
            error: error
        })
    }
}

export const tokenRefresh = (req, res, next) => {
    const refreshToken = req.body.refreshToken;
    if (refreshToken == null) {
        res.status(401).json({
            message: "Unauthorized..!"
        })
    } else if (!refreshtokens.includes(refreshToken)) {
        res.status(403).json({
            message: "Forbidden..!"
        })
    } else {
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (err, user) => {
            if (err) {
                res.status(404).json({
                    message: "error..!"
                })
            } else {
                const token = jwt.sign({ email: req.body.email }, process.env.JWT_TOKEN_KEY, { expiresIn: "10s" });
                res.status(201).json({
                    message: "Session Extended..!",
                    token
                })
            }
        })
    }
}