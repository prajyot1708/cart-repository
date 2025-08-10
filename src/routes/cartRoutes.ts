import { Router } from "express";
import CartController from "../controllers/CartController";
import CartService from "../services/CartService";

const router = Router();
const cartService = new CartService();
const cartController = new CartController(cartService);

router.post("/add-item", cartController.addItem);
router.post("/calculate-total", cartController.calculateCartTotal);

export default router;
