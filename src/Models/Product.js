const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  weight: Number,
  description: String,
});

module.exports = mongoose.model("Product", ProductSchema);
