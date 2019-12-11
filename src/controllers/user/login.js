import User from "../../models/user";
import jwt from "jsonwebtoken";

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email, password });
        const id = existingUser._id;
        if (!existingUser) {
            throw new Error('User does not exist');
        }
        var token = jwt.sign({ id: id }, "secret_key", { expiresIn: 60 * 60 });

        res.setHeader("Authorization", "Bearer " + token);
        return res.status(201).json({ "message": "Successfully logged in" });

    } catch (err) {
        console.log(err);
    }
};