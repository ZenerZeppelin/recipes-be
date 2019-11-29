import express from "express";
import { addCategory, deleteCategory, editCategory, getCategory, getCategorys } from "../controllers/category";

const router = express.Router();
router.post("/addCategory", addCategory);
router.delete("/deleteCategory", deleteCategory);
router.put("/editCategory", editCategory);
router.get("/getCategory/:idCategory", getCategory);
router.get("/getCategorys", getCategorys);
export default router;