import Category from "../../models/category";

import { response } from "../../util"

export const addCategory = async (req, res, next) => {
    try {

        if (!req.body.name) {
            return res.status(200).json(response(false, "Field name is required."));
        }

        const category = new Category({
            ...req.body,
            image: req.file.path
        });


        await category.save();
        return res.status(201).json(response(true, "Category created successfully"));

    } catch (error) {
        return res.status(500).json(response(false, "Error while creating category"));
    }
};