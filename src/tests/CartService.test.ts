import CartService from "../services/CartService";


describe("CartService", () => {
  let cartService: CartService;

  beforeEach(() => {
    cartService = new CartService();

    // Pre-load some default products
    cartService.addProduct({ name: "Apple", price: 35, offer: null });
    cartService.addProduct({ name: "Banana", price: 20, offer: null });
    cartService.addProduct({ name: "Melon", price: 50, offer: "BOGOF" });
    cartService.addProduct({ name: "Lime", price: 15, offer: "THREE_FOR_TWO" });
  });

  it("should calculate total without offers", () => {
    const total = cartService.calculateCartTotal(["Apple", "Apple", "Banana"]);
    expect(total).toBe(35 * 2 + 20); // 90p
  });

  it("should apply BOGOF correctly for Melons", () => {
    const total = cartService.calculateCartTotal(["Melon", "Melon"]);
    expect(total).toBe(50); // 1 paid, 1 free
  });

  it("should apply THREE_FOR_TWO correctly for Limes", () => {
    const total = cartService.calculateCartTotal(["Lime", "Lime", "Lime"]);
    expect(total).toBe(15 * 2); // Pay for 2
  });

  it("should handle mixed items and offers", () => {
    const total = cartService.calculateCartTotal([
      "Apple", "Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime"
    ]);
    expect(total).toBe(90 + 50 + 30); // 90p (apple+banana) + 50p (melons) + 30p (limes)
  });

  it("should ignore unknown products", () => {
    const total = cartService.calculateCartTotal(["UnknownItem", "Apple"]);
    expect(total).toBe(35);
  });

  it("should allow adding new product dynamically", () => {
    cartService.addProduct({ name: "Orange", price: 25, offer: null });
    const total = cartService.calculateCartTotal(["Orange", "Apple"]);
    expect(total).toBe(25 + 35);
  });
});
