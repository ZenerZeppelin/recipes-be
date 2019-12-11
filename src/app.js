import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import userRoute from "./routes/user";
import categoryRoute from "./routes/category";
import recipeRoute from "./routes/recipe";

const app = express();
app.use(bodyParser.json());

app.use("/user", userRoute);
app.use("/category", categoryRoute);
app.use("/recipe", recipeRoute);

mongoose.connect("mongodb://localhost:27017/recipes-app", { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(() => {
        console.log("App is online");
        app.listen(3001);
    })
    .catch("Error while connecting to database"); 
