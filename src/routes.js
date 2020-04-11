const express = require("express");
const ProductController = require("./Controllers/ProductController");

const routes = express.Router();

routes.post("/products", ProductController.store);
routes.get("/listproducts", ProductController.index);
routes.delete("/products/:id", ProductController.delete);
module.exports = routes;
