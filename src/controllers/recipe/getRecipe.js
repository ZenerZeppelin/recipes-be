import Recipe from "../../models/recipe";

export const getRecipe = async (req, res, next) => {
    try {
        const idRecipe = req.params.idRecipe;
        const recipe = await Recipe.findById({ _id: idRecipe });
        if (!recipe) {
            throw new Error("Recipe does not exist");
        }
        return res.status(201).json({ recipe });

    } catch (error) {
        console.log(error);
    }
};