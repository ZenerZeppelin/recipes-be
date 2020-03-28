import User from "../../models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { response } from "../../util"

require("dotenv").config();

export const login = async (req, res, next) => {
    try {
        const { SECRET_KEY } = process.env;
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(200).json(response(false, "User does not exist."))
        }

        const match = await bcrypt.compare(password, existingUser.password);
        if (!match) {
            return res.status(200).json(response(false, "Wrong password entered."));
        }


        var token = jwt.sign({ id: existingUser._id, role: existingUser.role }, SECRET_KEY, { expiresIn: 60 * 60 });
        res.setHeader("Authorization", "Bearer " + token);
        return res.status(201).json({ "message": "Successfully logged in" });

    } catch (err) {
        return res.status(500).json(response(false, "Error while logging in"));
    }
};