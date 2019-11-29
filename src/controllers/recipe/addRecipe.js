import Recipe from "../../models/recipe";

export const addRecipe = async (req, res, next) => {
    try {
        //const { name, description, ingredients, measure, category } = req.body;
        const recipe = new Recipe({
            ...req.body
        });
        await recipe.save();

        return res.status(201).json({ "message": "Recipe added successfully" });
    } catch (error) {
        console.log(error);
    }
};