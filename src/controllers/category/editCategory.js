import Category from "../../models/category";

export const editCategory = async (req, res, next) => {
    try {
        const idCategory = req.body.idCategory;
        await Category.findByIdAndUpdate({ _id: idCategory }, { ...req.body });
        return res.status(201).json({ "message": "Category updated successfully" });

    } catch (error) {
        console.log(error);
    }
};