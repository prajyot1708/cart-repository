import Offer from "./Offer";

export default class BuyOneGetOne implements Offer {
  private price: number;

  constructor(price: number) {
    this.price = price;
  }

  public applyProductOffer(quantity: number): number {
    const quantityPayable = Math.ceil(quantity / 2);
    return quantityPayable * this.price;
  }
}
