export type OfferType = "BOGOF" | "THREE_FOR_TWO" | null;

export interface Product {
  name: string;
  price: number; 
  offer: OfferType;
}

export const productCatalog: Record<string, Product> = {
  apple: { name: "Apple", price: 35, offer: null },
  banana: { name: "Banana", price: 20, offer: null },
  melon: { name: "Melon", price: 50, offer: "BOGOF" },
  lime: { name: "Lime", price: 15, offer: "THREE_FOR_TWO" }
};
