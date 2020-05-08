import express from "express";
import { addCategory, deleteCategory, editCategory, getCategory, getCategories } from "../controllers/category";
import { isAdmin, uploadImage } from "../middlewares"

const router = express.Router();
router.post("/addCategory", isAdmin, uploadImage("categoryImage"), addCategory);
router.delete("/deleteCategory/:idCategory", isAdmin, deleteCategory);
router.put("/editCategory/:idCategory", isAdmin, editCategory);
router.get("/getCategory/:idCategory", getCategory);
router.get("/getCategories", getCategories);
export default router;