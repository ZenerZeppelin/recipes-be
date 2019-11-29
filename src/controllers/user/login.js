import User from "../../models/user";

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.find({ email, password });
        if (!existingUser)
            throw new Error('User does not exist');

        return res.status(201).json({ "message": "User logged successfully" });

    } catch (err) {
        console.log(err);
    }
};