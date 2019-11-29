import express from "express";
import { addRecipe, deleteRecipe, editRecipe, getRecipe, getRecipes } from "../controllers/recipe";

const router = express.Router();

router.post("/addRecipe", addRecipe);
router.delete("/deleteRecipe", deleteRecipe);
router.put("/editRecipe", editRecipe);
router.get("/getRecipe/:idRecipe", getRecipe);
router.get("/getRecipes", getRecipes);

export default router;