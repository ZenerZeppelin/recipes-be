import Category from "../../models/category";

export const deleteCategory = async (req, res, next) => {
    try {
        const idCategory = req.body.idCategory;
        await Category.findByIdAndDelete({ _id: idCategory });


        return res.status(201).json({ "message": "Category deleted successfully" });

    } catch (error) {
        console.log(error)
    }
};