import express from 'express';
import { createFood, deleteFood, getFood, updateFood, getFoodById } from '../controllers/foodController.js';

const foodRouter = express.Router();

foodRouter.get("/get-food", getFood)
foodRouter.get("/get-food-by-id/:food_id", getFoodById)
foodRouter.post("/create-food", createFood)
foodRouter.put("/update-food/:food_id", updateFood)
foodRouter.delete("/delete-food/:food_id", deleteFood)


export default foodRouter;
