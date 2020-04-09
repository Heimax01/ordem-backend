const express = require("express");
const CoinController = require("./Controllers/ProductController");

const routes = express.Router();

routes.post("/products", CoinController.store);
routes.get("/listproducts", CoinController.index);
module.exports = routes;
