import Rewards from "../Models/Rewards.js";


export const insertRewards = async (req, res) => {
    try {
        const prefix = "RID"
        const RID = prefix + "_" + String(Date.now()).slice(-6);
        let newCount = 0;
        const chkAvailability = await Rewards.findOne({ memberId: req.body.memberId })
        if (chkAvailability) {
            newCount = chkAvailability.count + req.body.count
        } else {
            newCount = req.body.count;
        }
        const newRewards = new Rewards({
            RID: RID,
            memberId: req.body.memberId,
            count: newCount
        })

        const newReward = await newRewards.save();
        if (newReward) {
            res.status(200).json({
                message: "Rewards added..!",
                payload: newReward
            })
        } else {
            res.status(400).json({
                message: "Rewards adding failed..!"
            })
        }

    } catch (error) {
        res.status(500).json({
            message: "Somthing went wrong..!",
            error: error
        })
    }
}

export const getCount = async (req, res) => {
    try {

        const checkRewards = await Rewards.findOne({ memberId: req.body.memberId })
        if(checkRewards){
            
        }

    } catch (error) {
        res.status(500).json({
            message: "Somthing went wrong..!",
            error: error
        })
    }
}
