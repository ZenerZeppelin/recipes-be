import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: String,
    lastName: String,
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }],
    role: {
        type: String,
        required: true,
        default: "User"
    }
});

export default mongoose.model("User", userSchema);