import mongoose from "mongoose";
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: String,
    description: String,
    ingredients: String,
    measure: Number,
    category: {
        type: Schema.Types.ObjectId
    },
    image: String,
    video: String
});

export default mongoose.model("Recipe", recipeSchema);