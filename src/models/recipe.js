import mongoose from "mongoose";
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    image: String,
    video: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

export default mongoose.model("Recipe", recipeSchema);