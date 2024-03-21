import { Router } from "express";
import dotenv from "dotenv";
import {
  addRecipe,
  deleteRecipes,
  getRecipe,
  getRecipes,
  updateRecipe,
} from "../controllers/recipes.controller.js";

dotenv.config();

const router = Router();

//the database url

//route to post data
router.post("/", addRecipe);

//route to delete data
router.delete("/:id", deleteRecipes);

//route to patch data by id
router.patch("/:id", updateRecipe);

//route to get data by id
router.get("/:id", getRecipe);

//route to get data
router.get("/", getRecipes);

export default router;
