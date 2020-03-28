import Recipe from "../../models/recipe";

import { response } from "../../util"

export const getRecipe = async (req, res, next) => {
    try {
        const recipe = await Recipe.findById({ _id: req.params.idRecipe });
        if (!recipe) {
            return res.status(200).json(response(false, "Recipe does not exist."));
        }
        return res.status(201).json({ recipe });

    } catch (error) {
        return res.status(500).json(response(false, "Error with getting recipe."));
    }
};