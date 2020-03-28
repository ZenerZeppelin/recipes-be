import Category from "../../models/category";

import { response } from "../../util"

export const getCategory = async (req, res, next) => {
    try {
        const category = await Category.findById({ _id: req.params.idCategory });
        if (!category) {
            return res.status(200).json(response(false, "Category does not exist"));
        }
        return res.status(201).json({ category });

    } catch (error) {
        return res.status(500).json(response(false, "Error while getting category"));
    }
};