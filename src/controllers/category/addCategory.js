import Category from "../../models/category";

export const addCategory = async (req, res, next) => {
    try {
        const { name, image } = req.body;
        const category = new Category({
            name,
            image
        });

        await category.save();
        return res.status(201).json({ "message": "category added successfully" });

    } catch (error) {
        console.log(error);
    }
};