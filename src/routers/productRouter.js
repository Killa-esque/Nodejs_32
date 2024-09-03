import { createProduct, getProduct } from '../controllers/productController.js';
import express from 'express';

const productRouter = express.Router();

productRouter.get("product/get-product", getProduct)
productRouter.post("product/create-product", createProduct)


export default productRouter;
