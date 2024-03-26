import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import recipesRoutes from "./routes/recipes.routes.js";

dotenv.config();
const app = express();

//apply middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());
app.use(express.static(`uploads`));


const PORT = process.env.PORT || 9040;

//use routes
app.use("/recipes", recipesRoutes);


//make database connection
try {
  await mongoose.connect(process.env.MONGO_URI);
} catch (error) {
  console.log(error);
}
//listen incoming requests
app.listen(PORT, () => {
  console.log(`express app is running ${PORT}`);
});
