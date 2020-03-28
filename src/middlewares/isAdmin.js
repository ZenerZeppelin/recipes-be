import jwt from "jsonwebtoken";
import { response } from "../util";

require("dotenv").config();

export const isAdmin = async (req, res, next) => {

    try {
        const { SECRET_KEY } = process.env
        const authHeader = req.get("Authorization");
        if (!authHeader) {
            return res.status(401).json(response(false, "Not authenticated."));
        }
        ;
        const token = authHeader.split(" ")[1];
        let decodedToken;
        try {
            decodedToken = await jwt.verify(token, SECRET_KEY);
            if (!decodedToken) {
                return res.status(401).json(response(false, "Not authenticated."))
            }
            if (decodedToken.role !== 'Admin')
                return res.status(401).json(response(false, "Not authenticated."))

            req.token = decodedToken;
            return next();
        } catch (error) {
            return res.status(401).json(response(false, "Not authenticated."))
        }

    } catch (error) {
        return error.Message;
    }

};