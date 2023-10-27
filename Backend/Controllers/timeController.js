import TimeTable from "../Models/timeTable.js";
import member from "../Models/member.js";
import moment from 'moment'
import cron from 'node-cron';

export const insertTime = async (req, res) => {
    console.log(req.body)
    try {
        const existMember = await member.findOne({ memberId: req.body.memberId });
        if (existMember) {
            const prefix = "TID";
            const TID = (prefix + "_" + Date.now());
            const newTime = new TimeTable({
                TID: TID,
                memberId: req.body.memberId,
                gymName: req.body.gymName,
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
        } else {
            res.status(405).json({
                message: "member not exist..!"
            })
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
        if (existingTimeTable) {
            const savedTimeTable = existingTimeTable.timeTable;
            let indexToDelete = -1;

            const userDateTime = moment(req.body.dateAndTime, 'MM/DD/YYYY, hh:mm:ss A').format();
            console.log(userDateTime)
            for (let i = 0; i < savedTimeTable.length; i++) {
                const savedDateTime = moment(savedTimeTable[i], 'MM/DD/YYYY, hh:mm:ss A').format();
                const difference = Math.abs(new Date(savedDateTime) - new Date(userDateTime));
                const diffInHours = difference / (1000 * 60 * 60);

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
                        res.status(200).json({
                            message: 'Time table element deleted..!',
                            payload: updateRewards,
                        });
                    } else {
                        console.log("rewards adding error")
                    }
                }



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
            console.log('error.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};


cron.schedule('0 19 * * 0', () => {
    deleteData();
    console.log('Task scheduled for every Sunday 7.00 PM');
});


export const gettimeTable = async (req, res) => {
    console.log(req.body)
    try {
        const timetableData = await TimeTable.find({ gymName: req.body.gymName });
        if (timetableData) {
            res.status(200).json({
                message: 'TimeTable data fetched successfully',
                data: timetableData,
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

export const getUserTime = async (req, res) => {
    try {
        const timetableData = await TimeTable.find({ memberId: req.body.memberId });
        if (timetableData) {
            res.status(200).json({
                message: 'TimeTable data fetched successfully',
                data: timetableData,
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