import Category from "../../models/category";

export const getCategorys = async (req, res, next) => {
    try {
        const categorys = await Category.find();
        return res.status(201).json({ categorys });
    } catch (error) {
        console.log(error);
    }
};