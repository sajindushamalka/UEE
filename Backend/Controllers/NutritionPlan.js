import NutritionPlan from "../Models/NutritionPlan.js";

export const addNutrition = async (req, res) => {
  try {
    const prefix = "NID";
    const nId = prefix + Date.now();

    const nutritionType = req.body.nutritionType;
    const nutritionPlanId = req.body.nutritionPlanId;
    const nutritionPlanDuration = req.body.nutritionPlanDuration;

    const newNut = new NutritionPlan({
        nutritionId: nId,
      nutritionType:nutritionType,
      nutritionPlanId: nutritionPlanId,
      nutritionPlanDuration:nutritionPlanDuration
    });

    const newF = await newNut.save();
 
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

export const getAllNutritions = async (req, res) => {
  try {
    const foods = await NutritionPlan.find();
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

export const getOneNutrition = async (req, res) => {
  try {
    const foodId = req.params.id;
    const food = await NutritionPlan.findById(foodId);

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

export const updateNutrition = async (req, res) => {
  try {
    const foodId = req.params.id;
    const food = await NutritionPlan.findById(foodId);
    const f = {
        nutritionId: req.body.nutritionId,
        nutritionType: req.body.nutritionType,
        nutritionPlanId: req.body.nutritionPlanId,
        nutritionPlanDuration: req.body.nutritionPlanDuration,
    };

    const upFo = await NutritionPlan.findByIdAndUpdate(foodId, f);
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

export const deleteNutrion = async (req, res) => {
  try {
    const foodId = req.params.id;
    const food = await NutritionPlan.findByIdAndDelete(foodId);
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

export const searchNutrition = async(req,res) => {
  try{
    const plan = req.body.plan;
    const duration = req.body.duration;
    console.log(plan,duration);
    const nutrition = await NutritionPlan.findOne({nutritionType:plan, nutritionPlanDuration:duration});

    if(nutrition){
      res.status(200).json({
        payload:nutrition
      });
    }else{
      res.status(404).json({
        message: "Error in getting Food",
      });
    }

  }catch(err){
    res.status(500).json({
      message: "Server Error",
    });
  }
}