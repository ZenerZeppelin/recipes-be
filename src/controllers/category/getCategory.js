import Category from "../../models/category";

export const getCategory = async (req, res, next) => {
    try {
        const idCategory = req.params.idCategory;
        const category = await Category.findById({ _id: idCategory });
        if (!category) {
            throw new Error("Category does not exist");
        }
        return res.status(201).json({ category });

    } catch (error) {
        console.log(error);
    }
};