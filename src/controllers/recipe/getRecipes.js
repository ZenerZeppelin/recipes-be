import Recipe from "../../models/recipe";
import { response } from "../../util"

export const getRecipes = async (req, res, next) => {
    try {
        const recipes = await Recipe.find();
        if (recipes.length == 0) {
            return res.status(200).json(response(false, "There are no recipes"));
        }
        return res.status(201).json({ recipes });

    } catch (error) {
        return res.status(500).json(response(false, "Error with getting recipes"));
    }
};