import Foods from "../Models/Foods.js";

export const addFood = async (req, res) => {
  try {
    const prefix = "FID";
    const foodId = prefix + Date.now();

    const foodName = req.body.foodName;
    const foodCalorie = req.body.foodCalorie;

    const newFood = new Foods({
      foodId: foodId,
      foodName: foodName,
      foodCalorie: foodCalorie
    });

    const newF = await newFood.save();
 
    if (newF) {
      res.status(200).json({
        message: "New Food Added",
        payload: newF,
      });
    } else {
      res.status(400).json({
        message: "Food Added Error",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      error: err,
    });
  }
};

export const getAllFoods = async (req, res) => {
  try {
    const foods = await Foods.find();
    if (foods) {
      res.status(200).json({
        payload: foods,
      });
    } else {
      res.status(404).json({
        message: "Error in getting Foods",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getOneFood = async (req, res) => {
  try {
    const foodId = req.params.id;
    const food = await Foods.findById(foodId);

    if (food) {
      res.status(200).json({
        payload: food,
      });
    } else {
      res.status(404).json({
        message: "Error in getting Food",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const updateFood = async (req, res) => {
  try {
    const foodId = req.params.id;
    const food = await Foods.findById(foodId);
    const f = {
        foodId: req.body.foodId,
        foodName: req.body.foodName,
        foodCalorie: req.body.foodCalorie
    };

    const upFo = await Foods.findByIdAndUpdate(foodId, f);
    if (upFo) {
      res.status(200).json({
        payload: f,
      });
    } else {
      res.status(404).json({
        message: "Error in updating Food",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const deleteFood = async (req, res) => {
  try {
    const foodId = req.params.id;
    const food = await Foods.findByIdAndDelete(foodId);
    if (food) {
      res.status(200).json({
        message: "Food deleted",
      });
    } else {
      res.status(404).json({
        message: "Error in deleting Food",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

