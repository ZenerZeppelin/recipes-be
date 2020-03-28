import Category from "../../models/category";

import { response } from "../../util"

export const getCategories = async (req, res, next) => {
    try {
        const categorys = await Category.find();
        if (categorys.length == 0)
            return res.status(200).json(response(false, "No categories found."));

        return res.status(200).json(categorys);
    } catch (error) {
        console.log(error);
    }
};