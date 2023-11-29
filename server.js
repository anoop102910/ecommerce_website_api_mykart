const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/product/", productRoutes);
app.use("*", (req, res) => res.json("Route not found"));

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
}

connectToDb();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
