import MonthPlan from "../Models/MonthPlan.js";

export const addPlan = async (req, res) => {
  try {
    const prefix = "MID";
    const monthPlanId = prefix + Date.now();

    const monthPlanName = req.body.monthPlanName;
    const springOne = req.body.springOne;
    const springTwo = req.body.springTwo;
    const springTree = req.body.springTree;
    const springFour = req.body.springFour;

    const newMonth = new MonthPlan({
        monthPlanId: monthPlanId,
        monthPlanName: monthPlanName,
        springFour: springFour,
        springTree: springTree,
        springTwo: springTwo,
        springOne: springOne
    });

    const newM = await newMonth.save();
 
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

export const getAllMonth = async (req, res) => {
  try {
    const months = await MonthPlan.find();
    if (months) {
      res.status(200).json({
        payload: months,
      });
    } else {
      res.status(404).json({
        message: "Error in getting Months",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getOneMonths = async (req, res) => {
  try {
    const monthId = req.params.id;
    const month = await MonthPlan.findById(monthId);
    console.log(month)
    if (month) {
      res.status(200).json({
        payload: month,
      });
    } else {
      res.status(404).json({
        message: "Error in getting Month",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const updateMonth = async (req, res) => {
  try {
    const monthId = req.params.id;
    const month = await MonthPlan.findById(monthId);
    const m = {
        monthPlanId: req.body.monthPlanId,
        monthPlanName: req.body.monthPlanName,
        springOne: req.body.springOne,
        springTwo: req.body.springTwo,
        springTree: req.body.springTree,
        springFour: req.body.springFour
    };

    const upWe = await MonthPlan.findByIdAndUpdate(monthId, m);
    if (upWe) {
      res.status(200).json({
        payload: m,
      });
    } else {
      res.status(404).json({
        message: "Error in updating Month",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const deleteMonth = async (req, res) => {
  try {
    const monthId = req.params.id;
    const month = await MonthPlan.findByIdAndDelete(monthId);
    if (month) {
      res.status(200).json({
        message: "month deleted",
      });
    } else {
      res.status(404).json({
        message: "Error in deleting month",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

