import userSelectedNutritionPlan from "../Models/UserSelectedNutritionPlan.js";

export const addUSPlan = async (req, res) => {
  try {

    const userAdd = await userSelectedNutritionPlan.findOne({ ususerID: req.body.ususerID });

    if(userAdd){
        console.log("User Already Added");
    }else{
        const prefix = "USNID";
        const monthPlanId = prefix + Date.now();

        const ususerID = req.body.ususerID;
        const usNPlanID = req.body.usNPlanID;
        const type = req.body.type;
    
        const newMonth = new userSelectedNutritionPlan({
            usplanID: monthPlanId,
            ususerID: ususerID,
            usNPlanID: usNPlanID,
            type: type,
        });
    
        const newM = await newMonth.save();
    }
   
 
    if (newM) {
      res.status(200).json({
        message: "New Month Added",
        payload: newM,
      });
    } else {
      res.status(400).json({
        message: "Month Added Error",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      error: err,
    });
  }
};

// export const getAllMonth = async (req, res) => {
//   try {
//     const months = await MonthPlan.find();
//     if (months) {
//       res.status(200).json({
//         payload: months,
//       });
//     } else {
//       res.status(404).json({
//         message: "Error in getting Months",
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }
// };

// export const getOneMonths = async (req, res) => {
//   try {
//     const monthId = req.params.id;
//     const month = await MonthPlan.findById(monthId);

//     if (month) {
//       res.status(200).json({
//         payload: month,
//       });
//     } else {
//       res.status(404).json({
//         message: "Error in getting Month",
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }
// };

// export const updateMonth = async (req, res) => {
//   try {
//     const monthId = req.params.id;
//     const month = await MonthPlan.findById(monthId);
//     const m = {
//         monthPlanId: req.body.monthPlanId,
//         monthPlanName: req.body.monthPlanName,
//         springOne: req.body.springOne,
//         springTwo: req.body.springTwo,
//         springTree: req.body.springTree,
//         springFour: req.body.springFour
//     };

//     const upWe = await MonthPlan.findByIdAndUpdate(monthId, m);
//     if (upWe) {
//       res.status(200).json({
//         payload: m,
//       });
//     } else {
//       res.status(404).json({
//         message: "Error in updating Month",
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }
// };

// export const deleteMonth = async (req, res) => {
//   try {
//     const monthId = req.params.id;
//     const month = await MonthPlan.findByIdAndDelete(monthId);
//     if (month) {
//       res.status(200).json({
//         message: "month deleted",
//       });
//     } else {
//       res.status(404).json({
//         message: "Error in deleting month",
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }
// };

