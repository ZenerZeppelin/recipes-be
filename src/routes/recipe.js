import express from "express";
import { addRecipe, deleteRecipe, editRecipe, getRecipe, getRecipes } from "../controllers/recipe";

import { isLogged, uploadImage } from "../middlewares";

const router = express.Router();

router.post("/addRecipe", isLogged, uploadImage("recipeImage"), addRecipe);
router.delete("/deleteRecipe/:idRecipe", isLogged, deleteRecipe);
router.put("/editRecipe/:idRecipe", isLogged, editRecipe);
router.get("/getRecipe/:idRecipe", getRecipe);
router.get("/getRecipes", getRecipes);

export default router;