import express from "express";
import { ProductController } from "../controllers";

const router = express.Router();

router.route("/product")
  .get(ProductController.getProductImage)


export default router;