import express from "express";
import { signup, login, addFavouriteRecipe } from "../controllers/user"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.put("/addFavouriteRecipe", addFavouriteRecipe);

export default router;