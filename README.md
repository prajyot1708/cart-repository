# Problem Statement
 write a program in TypeScript/JAVA that calculates the price of a basket of shopping.

The solution should be accomplished in roughly two hours.

Items are presented one at a time, in a list, identified by name - for example "Apple" or "Banana".

Multiple items are present multiple times in the list, so for example ["Apple", "Apple", "Banana"] is a basket with two apples and one banana.
 
Items are priced as follows:

 - Apples are 35p each
 - Bananas are 20p each
 - Melons are 50p each, but are available as ‘buy one get one free’
 - Limes are 15p each, but are available in a ‘three for the price of two’ offer

Given a list of shopping, calculate the total cost of those items.

Kindly upload the code repository on GitHub and provide the details of the same.


# Setup & Run
1) Install dependencies:
npm install

2) Run in development (auto-reload):
npm run dev

or build & run:
npm run build
npm start

3) Server will run at:
http://localhost:3000

# API Endpoints
1) Add a product to the catalog
POST /cart/add-item
Adds or updates a product in the runtime catalog (in-memory).
Request body (JSON):

{
  "name": "Orange",
  "price": 25,
  "offer": null
}

name — string (product name)
price — number (price in pence)\
offer — "BOGOF" | "THREE_FOR_TWO" | null

- cURL example:

curl -X POST http://localhost:3000/cart/add-item \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Orange",
    "price": 25,
    "offer": null
  }'

- Example response:
{
  "message": "Product added successfully"
}

2) Calculate total cart price

POST /cart/calculate-total
Calculate total using the cart (default items + any added at runtime).\

Request body (JSON):
{
    "items": [
        "Apple",
        "Banana",
        "Melon",
        "Melon",
        "Lime",
        "Lime",
        "Lime"
    ]
}

- cURL example:
curl -X POST http://localhost:3000/cart/calculate-total \
  -H "Content-Type: application/json" \
  -d '{
    "items": ["Apple", "Apple", "Banana", "Melon", "Melon", "Lime", "Lime", "Lime"]
  }'

- Example response:
{
    "totalPrice": "1.35"
}

# Running Tests

1. Install test dependencies:

- npm install --save-dev jest ts-jest @types/jest supertest @types/supertest
- npx ts-jest config:init

2. Test files:

- Unit Tests → tests/CartService.test.ts
- API Tests → tests/CartController.test.ts

3. Run all tests:
npm test

Example output:
Test Suites: 2 passed, 2 total
Tests:       9 passed, 9 total
