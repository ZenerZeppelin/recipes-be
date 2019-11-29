import Recipe from "../../models/recipe";

export const editRecipe = async (req, res, next) => {
    try {
        const idRecipe = req.body.idRecipe;
        await Recipe.findByIdAndUpdate({ _id: idRecipe }, { ...req.body });
        return res.status(201).json({ "message": "Recipe edited successfully" });

    } catch (error) {
        console.log(error);
    }
};