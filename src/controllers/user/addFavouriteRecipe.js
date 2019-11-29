import User from "../../models/user";

export const addFavouriteRecipe = async (req, res, next) => {
    try {
        const { idRecipe, idUser } = req.body;
        const user = await User.findById({ _id: idUser });
        if (!user) {
            throw new Error('User does not exist');
        }
        const favRecipes = user.recipes;
        if (!favRecipes || favRecipes.length == 0) {
            const favouriteRecipes = [];
            favouriteRecipes.push(idRecipe);
            await User.findByIdAndUpdate({ _id: idUser }, { recipes: favouriteRecipes });
            return res.status(201).json({ "message": "Recipe added successfully" });
        }

        favRecipes.push(idRecipe);
        await User.findByIdAndUpdate({ _id: idUser }, { recipes: favRecipes });
        return res.status(201).json({ "message": "Recipe added successfully" });

    } catch (err) {
        console.log(err);
    }

};