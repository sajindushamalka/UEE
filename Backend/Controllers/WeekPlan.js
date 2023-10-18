import WeekPlan from "../Models/WeekPlan.js";

export const addPlan = async (req, res) => {
  try {
    const prefix = "WID";
    const weekPlanId = prefix + Date.now();

    const weekPlanName = req.body.weekPlanName;
    const monday = req.body.monday;
    const tuesday = req.body.tuesday;
    const wednesday = req.body.wednesday;
    const thursday = req.body.thursday;
    const friday = req.body.friday;
    const saturday = req.body.saturday;
    const sunday = req.body.sunday;

    const newWeek = new WeekPlan({
        weekPlanId: weekPlanId,
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday: friday,
        saturday: saturday,
        sunday: sunday, 
        weekPlanName: weekPlanName, 
    });

    const newF = await newWeek.save();
 
    if (newF) {
      res.status(200).json({
        message: "New Week Added",
        payload: newF,
      });
    } else {
      res.status(400).json({
        message: "Week Added Error",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      error: err,
    });
  }
};

export const getAllWeek = async (req, res) => {
  try {
    const weeks = await WeekPlan.find();
    if (weeks) {
      res.status(200).json({
        payload: weeks,
      });
    } else {
      res.status(404).json({
        message: "Error in getting weeks",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getOneWeek = async (req, res) => {
  try {
    const weekID = req.params.id;
    const week = await WeekPlan.findById(weekID);

    if (week) {
      res.status(200).json({
        payload: week,
      });
    } else {
      res.status(404).json({
        message: "Error in getting Week",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const updateWeek = async (req, res) => {
  try {
    const weekId = req.params.id;
    const week = await WeekPlan.findById(weekId);
    const w = {
        weekPlanId: req.body.weekPlanId,
        weekPlanName: req.body.weekPlanName,
        monday: req.body.monday,
        tuesday: req.body.tuesday,
        wednesday: req.body.wednesday,
        thursday: req.body.thursday,
        friday: req.body.friday,
        saturday: req.body.saturday,
        sunday: req.body.sunday,
    };

    const upWe = await WeekPlan.findByIdAndUpdate(weekId, w);
    if (upWe) {
      res.status(200).json({
        payload: w,
      });
    } else {
      res.status(404).json({
        message: "Error in updating Week",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const deleteWeek = async (req, res) => {
  try {
    const weekId = req.params.id;
    const Week = await WeekPlan.findByIdAndDelete(weekId);
    if (Week) {
      res.status(200).json({
        message: "Week deleted",
      });
    } else {
      res.status(404).json({
        message: "Error in deleting Week",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

