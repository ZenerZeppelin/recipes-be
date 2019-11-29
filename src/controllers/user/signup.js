import User from "../../models/user";

export const signup = async (req, res, next) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        console.log(req.body);

        const user = new User({
            email,
            password,
            firstName,
            lastName,
            recipes: []
        });

        await user.save();
        return res.status(201).json({ "message": "User signed up successfully" });
    } catch (error) {
        console.log(error);
    }
};
