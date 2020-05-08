import User from "../../models/user";
import { response } from "../../util";


export const addFavouriteRecipe = async (req, res, next) => {
    try {

        const { idRecipe } = req.body;
        const user = await User.findById({ _id: req.token.id });
        const favRecipes = user.recipes;
        if (!favRecipes || favRecipes.length == 0) {
            const favouriteRecipes = [];
            favouriteRecipes.push(idRecipe);
            await User.findByIdAndUpdate({ _id: req.token.id }, { recipes: favouriteRecipes });
            return res.status(201).json(response(true, "Favourite recipe added."));
        }

        favRecipes.push(idRecipe);
        await User.findByIdAndUpdate({ _id: req.token.id }, { recipes: favRecipes });
        return res.status(201).json(response(true, "Favourite recipe added."));

    } catch (err) {
        console.log(err);
        return res.status(500).json(response(false, "Error with adding favourite recipe."));
    }

};