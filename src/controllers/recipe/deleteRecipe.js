import Recipe from "../../models/recipe";

export const deleteRecipe = async (req, res, next) => {
    try {
        const idRecipe = req.body.idRecipe;

        await Recipe.findByIdAndDelete({ _id: idRecipe });
        return res.status(201).json({ "message": "Recipe deleted successfully" });

    } catch (error) {
        console.log(error);
    }
};