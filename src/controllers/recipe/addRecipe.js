import Recipe from "../../models/recipe";

import { response } from "../../util"

export const addRecipe = async (req, res, next) => {
    try {
        const { name, description, ingredients } = req.body;
        if (!name || !description || !ingredients)
            return res.status(200).json(response(false, "Required fields not privided."));

        const recipe = new Recipe({
            ...req.body,
            author: req.token.id
        });

        await recipe.save();

        return res.status(201).json(response(true, "Recipe added successfully"));
    } catch (error) {
        return res.status(500).json(response(false, "Error with adding recipe"));
    }
};