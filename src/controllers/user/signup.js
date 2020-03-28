import bcrypt from "bcrypt";
import User from "../../models/user";
import { response } from "../../util"

export const signup = async (req, res, next) => {
    try {
        const { password } = req.body;

        const hashedPass = await bcrypt.hash(password, 12);
        if (!hashedPass) {
            return res.status(500).json(response(false, "Error while registrating."));
        }

        const user = new User({
            ...req.body,
            password: hashedPass,
            recipes: []
        });

        await user.save();
        return res.status(201).json(response(true, "User signed up successfully"));
    } catch (error) {
        return res.status(500).json(response(false, "Error while registrating."))
    }
};
