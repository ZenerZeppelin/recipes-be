import User from "../../models/user";
import jwt from "jsonwebtoken";

export const addFavouriteRecipe = async (req, res, next) => {
    try {

        const authHeader = req.get("Authorization");
        if (!authHeader) {
            throw new Error("Not logged in");
        }

        const token = authHeader.split(" ")[1];
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, "secret_key");
        } catch (error) {
            console.log(error);
            throw new Error("Not authenticated");
        }

        if (!decodedToken) {
            throw new Error("Not authenticated");
        }

        const { idRecipe } = req.body;
        const user = await User.findById({ _id: decodedToken.id });
        if (!user) {
            throw new Error('User does not exist');
        }
        const favRecipes = user.recipes;
        if (!favRecipes || favRecipes.length == 0) {
            const favouriteRecipes = [];
            favouriteRecipes.push(idRecipe);
            await User.findByIdAndUpdate({ _id: decodedToken.id }, { recipes: favouriteRecipes });
            return res.status(201).json({ "message": "Recipe added successfully" });
        }

        favRecipes.push(idRecipe);
        await User.findByIdAndUpdate({ _id: decodedToken.id }, { recipes: favRecipes });
        return res.status(201).json({ "message": "Recipe added successfully" });

    } catch (err) {
        console.log(err);
    }

};