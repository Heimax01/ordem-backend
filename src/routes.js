const express = require('express');
const CoinController = require('./Controllers/CoinController');

const routes = express.Router();

routes.post('/coins', CoinController.store);
routes.get('/listcoins', CoinController.index);
module.exports = routes;