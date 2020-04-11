require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const socketio = require("socket.io");
const http = require("http");

const Product = require("./Models/Product");
const routes = require("./routes");

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Product.watch().on("change", (change) => {
  console.log(`[SERVER_CHANGE_STREAM] Product:`, change);
  io.emit("changeData", change);
});

app.use(cors());

app.use(express.json());

app.use(routes);

server.listen(process.env.PORT || 3333);
