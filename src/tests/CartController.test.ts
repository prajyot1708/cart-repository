import request from "supertest";
import app from "../index" 

describe("Cart API", () => {
  it("should add a product successfully", async () => {
    const res = await request(app)
      .post("/cart/add-item")
      .send({ name: "Orange", price: 25, offer: null })
      .expect(200);

    expect(res.body).toHaveProperty("message", "Product added successfully");
  });

  it("should calculate total for a basket", async () => {
    const res = await request(app)
      .post("/cart/calculate-total")
      .send({
        items: ["Apple", "Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime"]
      })
      .expect(200);

    expect(res.body).toHaveProperty("totalPrice", "1.7");
  });

  it("should return 400 if items array is missing", async () => {
    const res = await request(app)
      .post("/cart/calculate-total")
      .send({})
      .expect(400);

    expect(res.body).toHaveProperty("error", "Items array is required");
  });
});
