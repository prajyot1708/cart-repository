import { Product } from "../models/Product";
import { productCatalog } from "../offerMap";
import BuyOneGetOne from "../offers/BuyOneGetOne";
import BuyThreeForTwo from "../offers/BuyThreeForTwo";

class CartService {
  public addProduct(product: Product) {
    productCatalog[product.name.toLowerCase()] = product;
  }

  public calculateCartTotal(items: string[]): number {
    let total = 0;
    const itemCount: Record<string, number> = {};

    // Count each item
    items.forEach(item => {
      const key = item.toLowerCase();
      if (!productCatalog[key]) return;
      itemCount[key] = (itemCount[key] || 0) + 1;
    });

    console.log(itemCount)
    // Apply offers
    for (const [name, count] of Object.entries(itemCount)) {
      const product = productCatalog[name];
      if (!product) continue;

      switch (product.offer) {
        case "BOGOF":
          total += new BuyOneGetOne(product.price).applyProductOffer(count);
          break;
        case "THREE_FOR_TWO":
          total += new BuyThreeForTwo(product.price).applyProductOffer(count);
          break;
        default:
          total += count * product.price;
      }
    }

    return total; 
  }
}

export default CartService;
