import payment from '../Models/Payment.js'
import member from '../Models/member.js';


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
        console.log(formattedNextDate)

        //previous payment date calculate
        const recentPayment = await payment.findOne({ memberId: data.memberId }).sort({ createdAt: -1 });
        const lastDate = recentPayment ? recentPayment.createdAt : null;

        let formattedLastDate = null;
        if (lastDate != null) {
            formattedLastDate = lastDate.toLocaleDateString('en-GB');
        } else {
            formattedLastDate = today.toLocaleDateString('en-GB');
        }
        console.log(formattedLastDate)
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
            const memberId = newPayment.memberId;
            const form = {
                paymentStatus: "paid",
            }

            const update = await member.findOneAndUpdate({ memberId: memberId }, form, { new: true })
            console.log(update)
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