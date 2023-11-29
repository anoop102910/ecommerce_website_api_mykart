const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  size: {
    type: [String],
    enum: ["L", "M"],
    required: true,
  },
  color: {
    type: [String],
    enum: ["Red", "Green"],
    required: true,
  },
  price: {
    type: "Number",
  },
});

productSchema.pre("save", function (next) {
  if (this.size[0] === "L" && this.color[0] === "Red") this.price = 100;
  else if (this.size[0] === "M" && this.color[0] === "Red") this.price = 150;
  else if (this.size[0] === "L" && this.color[0] === "Green") this.price = 200;
  else if (this.size[0] === "M" && this.color[0] === "Green") this.price = 250;
  next();
});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;
