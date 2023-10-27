import TimeTable from "../Models/timeTable.js";
import member from "../Models/member.js";
import moment from 'moment'
import cron from 'node-cron';

export const insertTime = async (req, res) => {
    try {
        const existMember = await member.findOne({ memberId: req.body.memberId });
        if (existMember) {
            const prefix = "TID";
            const TID = (prefix + "_" + Date.now());
            const newTime = new TimeTable({
                TID: TID,
                memberId: req.body.memberId,
                timeTable: req.body.timeTable
            })

            const newtimeTable = await newTime.save()
            if (newtimeTable) {
                res.status(201).json({
                    message: 'Time table created..!',
                    payload: newtimeTable
                })
            } else {
                res.status(400).json({
                    message: 'error..!'
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

export const checkTime = async (req, res) => {
    console.log(req.body)
    try {
        const existingTimeTable = await TimeTable.findOne({ memberId: req.body.memberId });
        console.log(existingTimeTable)
        if (existingTimeTable) {
            const savedTimeTable = existingTimeTable.timeTable;
            console.log(savedTimeTable)
            let indexToDelete = -1;

            const userDateTime = moment(req.body.dateAndTime, 'YYYY-MM-DD hh:mm A').format();

            for (let i = 0; i < savedTimeTable.length; i++) {
                const savedDateTime = moment(savedTimeTable[i], 'YYYY-MM-DD hh:mm A').format();
                console.log(savedDateTime);
                const difference = Math.abs(new Date(savedDateTime) - new Date(userDateTime));
                console.log(difference);
                const diffInHours = difference / (1000 * 60 * 60);
                console.log(diffInHours);

                if (diffInHours <= 1 || diffInHours >= 1) {
                    indexToDelete = i;
                    break;
                }
            }

            if (indexToDelete !== -1) {
                savedTimeTable.splice(indexToDelete, 1);
                existingTimeTable.timeTable = savedTimeTable;

                const updatedTimeTable = await existingTimeTable.save();

                //add reward for user
                const user = await member.findOne({ memberId: req.body.memberId })
                if (user) {
                    const curentRewards = user.rewards;
                    const newRewards = curentRewards + 20
                    const id = { memberId: req.body.memberId }
                    const form = {
                        rewards: newRewards
                    }
                    const updateRewards = await member.findOneAndUpdate(id, form, { new: true })
                    if (updateRewards) {
                        console.log("rewards added success")
                    } else {
                        console.log("rewards adding error")
                    }
                }


                res.status(200).json({
                    message: 'Time table element deleted..!',
                    payload: updatedTimeTable,
                });
            } else {
                res.status(404).json({
                    message: 'No matching time found within one hour..!',
                });
            }
        } else {
            res.status(401).json({
                message: 'Time table not found..!',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong..!',
            error: error,
        });
    }
};

export const deleteData = async () => {
    try {
        const deletedRecords = await TimeTable.deleteMany({});

        if (deletedRecords) {
            console.log('All records related to the user have been deleted.');
        } else {
            console.log('No records found for the user.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

cron.schedule('0 19 * * 0', () => {
    deleteData();
    console.log('Task scheduled for every Friday at 10:45 AM');
});

