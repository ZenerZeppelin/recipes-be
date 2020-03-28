import Recipe from "../../models/recipe";

import { response } from "../../util"

export const deleteRecipe = async (req, res, next) => {
    try {
        const recipe = await Recipe.findById({ _id: req.params.idRecipe });
        if (!recipe)
            return res.status(200).json(response(false, "Recipe does not exist."));

        if (recipe.author != req.token.id)
            return res.status(200).json(response(false, "You are not author of the recipe."));

        await Recipe.findByIdAndDelete({ _id: req.params.idRecipe });
        return res.status(201).json(response(true, "Recipe deleted successfully"));

    } catch (error) {
        return res.status(500).json(response(false, "Error with deleting recipe"));
    }
};