export type OfferType = "BOGOF" | "THREE_FOR_TWO" | null;

export interface Product {
  name: string;
  price: number; 
  offer: OfferType;
}
