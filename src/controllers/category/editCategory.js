import Category from "../../models/category";

import { response } from "../../util"

export const editCategory = async (req, res, next) => {
    try {
        const { name, image } = req.body;
        if (!name && !image)
            return res.status(200).json(response(false, "Name or image must be edited."));

        const existingCategory = await Category.findById({ _id: req.params.idCategory });
        if (!existingCategory)
            return res.status(200).json(response(false, "Category does not exist."));

        await Category.findByIdAndUpdate({ _id: req.params.idCategory }, { ...req.body });
        return res.status(201).json(response(true, "Category updated successfully"));

    } catch (error) {
        return res.status(500).json(response(false, "Error while editing category."));
    }
};