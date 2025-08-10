import express from "express";
import bodyParser from "body-parser";
import cartRoutes from "./routes/cartRoutes";

const app = express();
app.use(bodyParser.json());

app.use("/cart", cartRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
