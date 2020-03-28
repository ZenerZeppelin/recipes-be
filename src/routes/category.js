import express from "express";
import { addCategory, deleteCategory, editCategory, getCategory, getCategories } from "../controllers/category";
import { isAdmin } from "../middlewares"

const router = express.Router();
router.post("/addCategory", isAdmin, addCategory);
router.delete("/deleteCategory/:idCategory", isAdmin, deleteCategory);
router.put("/editCategory/:idCategory", isAdmin, editCategory);
router.get("/getCategory/:idCategory", getCategory);
router.get("/getCategories", getCategories);
export default router;