import member from '../Models/member.js';
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';


let refreshtokens = [];

export const MemberSignup = async (req, res) => {

    try {
        let file = 'N/A'
        if (req.file) {
            file = req.file.filename
        }
        const existMember = await member.findOne({ email: req.body.email });
        if (existMember) {
            res.status(400).json({
                message: "Email already registered..!"
            })
        } else if (!existMember) {
            const prefix = "MID"
            const memberID = (prefix + "_" + Date.now())

            const HashPass = await bcrypt.hash(req.body.password, 10);
            const newMember = new member({
                memberId: memberID,
                name: req.body.name,
                age: req.body.age,
                mobileNo: req.body.mobileNo,
                address: req.body.address,
                height: req.body.height,
                weight: req.body.weight,
                gymName: req.body.gymName,
                rewards: 100,
                paymentStatus: "unpaid",
                email: req.body.email,
                password: HashPass
            })

            const newAccount = await newMember.save();
            if (newAccount) {
                if (req.body.memberId) {
                    const userData = await member.findOne({ memberId: req.body.memberId })
                    const curentRewards = userData.rewards;
                    const newRewards = curentRewards + 250

                    const id = { memberId: req.body.memberId }
                    const form = {
                        rewards: newRewards
                    }
                    const updateRewards = await member.findOneAndUpdate(id, form, { new: true })
                    if (updateRewards) {
                        console.log("rewards success")
                    } else {
                        console.log("error")
                    }
                }
                res.status(201).json({
                    message: 'Registration successfull..!',
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


export const MemberLogin = async (req, res) => {
    try {
        const registeredMember = await member.findOne({ email: req.body.email })
        if (registeredMember) {
            const enteredPwd = req.body.password;
            const dbPwd = registeredMember.password;

            const chkPwd = await bcrypt.compare(enteredPwd, dbPwd);
            if (chkPwd) {
                const token = jwt.sign({ email: req.body.email }, process.env.JWT_TOKEN_KEY1, { expiresIn: '1h' })
                const refreshtoken = jwt.sign({ email: req.body.email }, process.env.REFRESH_TOKEN_KEY1, { expiresIn: '3h' })
                refreshtokens.push(refreshtoken);

                res.status(201).json({
                    message: 'Login Successfull..!',
                    token,
                    refreshtoken,
                    user: {
                        memberId: registeredMember.memberId,
                        name: registeredMember.name,
                        age: registeredMember.age,
                        mobileNo: registeredMember.mobileNo,
                        address: registeredMember.address,
                        height: registeredMember.height,
                        weight: registeredMember.weight,
                        gymName: registeredMember.gymName,
                        rewards: registeredMember.rewards,
                        paymentStatus: registeredMember.paymentStatus,
                        email: registeredMember.email,
                    }
                })
            } else {
                res.status(404).json({
                    message: 'Incorrect password..!'
                })
            }
        } else {
            res.status(402).json({
                message: 'No account found under this email..!'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong..!",
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
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY1, (err, user) => {
            if (err) {
                res.status(404).json({
                    message: "error..!"
                })
            } else {
                const token = jwt.sign({ email: req.body.email }, process.env.JWT_TOKEN_KEY1, { expiresIn: "10s" });
                res.status(201).json({
                    message: "Session Extended..!",
                    token
                })
            }
        })
    }
}

