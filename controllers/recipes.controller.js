import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res, next) => {
  try {
    // Add Recipe to the database
    const createResult = await RecipeModel.create(req.body);
    // Return response
    res.json(createResult);
  } catch (error) {
    next(error);
  }
};

export const getRecipes = async (req, res) => {
  const result = await RecipeModel.find({});
  res.status(200).json(result);
};

export const getRecipe = async (req, res) => {
  try {
    const id = req.params.id;
    const getById = await RecipeModel.findById(id).exec();
    //return 404 if recipe not found
    if (getById === null) {
      res.status(404).json({
        message: `Recipe with ObjectId: ${req.params.id} Not Found!`,
      });
    }

    res.status(200).json(getById);
  } catch (error) {}
};

export const updateRecipe = (req, res) => {
  res.send("patching data");
};

export const deleteRecipes = (req, res) => {
  res.send("delete all recipes");
};
