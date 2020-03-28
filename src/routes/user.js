import express from "express";
import { signup, login, addFavouriteRecipe } from "../controllers/user"
import { isLogged } from "../middlewares"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.put("/addFavouriteRecipe", isLogged, addFavouriteRecipe);

export default router;