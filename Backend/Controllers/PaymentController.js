import payment from '../Models/Payment.js'
import member from '../Models/member.js';
import { sendMails } from './mailController.js'
import { paymentSuccess } from '../mailTemplate/payment.js'

export const createPayment = async (req, res) => {
    try {
        const data = req.body;
        const prefix = "PID";
        const pid = (prefix + "_" + Date.now());

        //next date calculate
        const today = new Date();
        const nextDate = new Date();
        nextDate.setDate(today.getDate() + 30);
        const formattedNextDate = nextDate.toLocaleDateString('en-GB');

        //previous payment date calculate
        const recentPayment = await payment.findOne({ memberId: data.memberId }).sort({ createdAt: -1 });
        const lastDate = recentPayment ? recentPayment.createdAt : null;

        let formattedLastDate = null;
        if (lastDate != null) {
            formattedLastDate = lastDate.toLocaleDateString('en-GB');
        } else {
            formattedLastDate = today.toLocaleDateString('en-GB');
        }
        const newData = new payment({
            paymentId: pid,
            memberId: data.memberId,
            name: data.name,
            nextDate: formattedNextDate,
            lastDate: formattedLastDate,
            amount: data.amount,
            rewards: data.rewards,
            gymName: data.gymName,
        })

        const newPayment = await newData.save();
        if (newPayment) {

            const id = { memberId: req.body.memberId }
            const newRewards = {
                rewards: 0
            }
            const updateRewards = await member.findOneAndUpdate(id, newRewards, { new: true })
            if (updateRewards) {
                console.log(res)
            } else {
                console.log("error")
            }

            const memberId = newPayment.memberId;
            const form = {
                paymentStatus: "paid",
            }

            const update = await member.findOneAndUpdate({ memberId: memberId }, form, { new: true })
            //send email receipt
            const details = {
                paymentId: pid,
                memberId: data.memberId,
                name: data.name,
                nextDate: formattedNextDate,
                lastDate: formattedLastDate,
                amount: data.amount,
                rewards: data.rewards,
                gymName: data.gymName,
            }
            const mailData = {
                to: req.body.email,
                subject: "Paymenet successfull receipt",
                html: paymentSuccess(details),
                attachments: [],
                body: ``
            }
            sendMails(mailData)//sent email

            res.status(201).json({
                message: "Payment successfull...!",
                payload: update
            })
        } else {
            res.status(400).json({
                message: "Payment unsuccessfull...!"
            })
        }

    } catch (error) {
        res.status(500).json({
            message: "Somthing went wrong..!",
            error: error
        })
    }
}

export const changeStatus = async (req, res) => {
    try {
        const checkUser = await payment.findOne({ memberId: req.body.memberId })
        if (checkUser) {
            const today = new Date().toLocaleDateString('en-GB');
            const expireDate = checkUser.nextDate;

            if (today > expireDate) {
                const form = {
                    paymentStatus: "expired",
                }
                const update = await member.findOneAndUpdate({ memberId: req.body.memberId }, form, { new: true })
                console.log(update)
                if (update) {
                    res.status(201).json({
                        message: "Payment successfull...!",
                        payload: update
                    })
                } else {
                    res.status(400).json({
                        message: "error...!",
                    })
                }
            }
        } else {
            res.status(401).json({
                message: "user not found...!",
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Somthing went wrong..!",
            error: error
        })
    }
}

export const getbyUser = async (req, res) => {
    try {
        const paymentData = await payment.find({ memberId: req.body.memberId });
        if (paymentData) {
            res.status(200).json({
                message: 'Payment data fetched successfully',
                data: paymentData,
            });
        } else {
            res.status(400).json({
                message: 'error..'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong..!',
            error: error,
        });
    }
}

