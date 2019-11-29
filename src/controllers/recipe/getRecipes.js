import Recipe from "../../models/recipe";

export const getRecipes = async (req, res, next) => {
    try {
        const recipes = await Recipe.find();
        return res.status(201).json({ recipes });

    } catch (error) {
        console.log(error);
    }
};