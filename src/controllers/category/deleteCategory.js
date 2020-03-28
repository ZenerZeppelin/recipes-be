import Category from "../../models/category";

import { response } from "../../util"

export const deleteCategory = async (req, res, next) => {
    try {
        const idCategory = req.params.idCategory;
        await Category.findByIdAndDelete({ _id: idCategory });


        return res.status(201).json({ "message": "Category deleted successfully" });

    } catch (error) {
        return res.status(500).json(response(false, "Error while deleting category"));
    }
};