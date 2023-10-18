import TreeMonthPlan from "../Models/TreeMonthPlan.js";

export const addPlan = async (req, res) => {
  try {
    const prefix = "TMID";
    const treeMonthPlanId = prefix + Date.now();

    const treeMonthPlanName = req.body.treeMonthPlanName;
    const springOne = req.body.springOne;
    const springTwo = req.body.springTwo;
    const springTree = req.body.springTree;
    const springFour = req.body.springFour;
    const springFive = req.body.springFive;
    const springSix = req.body.springSix;

    const newTMonth = new TreeMonthPlan({
        treeMonthPlanId: treeMonthPlanId,
        treeMonthPlanName: treeMonthPlanName,
        springFour: springFour,
        springTree: springTree,
        springTwo: springTwo,
        springOne: springOne,
        springFive: springFive,
        springSix: springSix,
    });

    const newM = await newTMonth.save();
 
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
    const months = await TreeMonthPlan.find();
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
    const month = await TreeMonthPlan.findById(monthId);

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
    const month = await TreeMonthPlan.findById(monthId);
    const m = {
        treeMonthPlanId: req.body.treeMonthPlanId,
        treeMonthPlanName: req.body.treeMonthPlanName,
        springOne: req.body.springOne,
        springTwo: req.body.springTwo,
        springTree: req.body.springTree,
        springFour: req.body.springFour,
        springFive: req.body.springFive,
        springSix: req.body.springSix,
    };

    const upWe = await TreeMonthPlan.findByIdAndUpdate(monthId, m);
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
    const month = await TreeMonthPlan.findByIdAndDelete(monthId);
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

