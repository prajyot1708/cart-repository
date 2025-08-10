import Offer from "./Offer";

export default class BuyThreeForTwo implements Offer {
  private price: number;

  constructor(price: number) {
    this.price = price;
  }

  public applyProductOffer(quantity: number): number {
    const quantityPayable = quantity - Math.floor(quantity / 3);
    return quantityPayable * this.price;
  }
}
