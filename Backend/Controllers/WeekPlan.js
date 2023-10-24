import WeekPlan from "../Models/WeekPlan.js";

export const addPlan = async (req, res) => {
  try {
    const prefix = "WID";
    const weekPlanId = prefix + Date.now();

    const weekPlanName = req.body.weekPlanName;
    const Monday = req.body.Monday;
    const Tuesday = req.body.Tuesday;
    const Wednesday = req.body.Wednesday;
    const Thursday = req.body.Thursday;
    const Friday = req.body.Friday;
    const Saturday = req.body.Saturday;
    const Sunday = req.body.Sunday;

    const newWeek = new WeekPlan({
        weekPlanId: weekPlanId,
        Monday: Monday,
        Tuesday: Tuesday,
        Wednesday: Wednesday,
        Thursday: Thursday,
        Friday: Friday,
        Saturday: Saturday,
        Sunday: Sunday, 
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

