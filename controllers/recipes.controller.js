import { RecipeModel } from "../models/recipe.js";


export const addRecipe =  async (req, res) => {
// Add Recipe to the database
const createResult = await RecipeModel.create(req.body);
// Return response
res.json(createResult);
  };

  export const getRecipes = (req, res) => {
    res.send('get by id');
  };

  export const getRecipe = (req, res) => {
    res.send('get by id');
  };

  export const updateRecipe = (req, res) => {
    res.send('patching data');
  };

  export const deleteRecipes = (req, res) => {
    res.send('delete all recipes');
  };