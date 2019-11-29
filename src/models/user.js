import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    recipes: [{
        type: Schema.Types.ObjectId
    }]
});

export default mongoose.model("User", userSchema);