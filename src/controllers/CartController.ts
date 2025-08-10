import { Request, Response } from "express";
import { Product } from "../models/Product";
import CartService from "../services/CartService";

class CartController {
  private cartService: CartService;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  public addItem = (req: Request, res: Response): void => {
    const { name, price, offer } = req.body as Product;
    if (!name || !price) {
      res.status(400).json({ error: "Name and price are required" });
      return;
    }
    this.cartService.addProduct({ name, price, offer: offer || null });
    res.json({ message: "Product added successfully" });
  };

  public calculateCartTotal = (req: Request, res: Response): void => {
    const { items } = req.body as { items: string[] };
    if (!items || !Array.isArray(items)) {
      res.status(400).json({ error: "Items array is required" });
      return;
    }
    const totalPrice = this.cartService.calculateCartTotal(items);
    res.json({ totalPrice: `${(totalPrice / 100)}` });
  };
}

export default CartController;
