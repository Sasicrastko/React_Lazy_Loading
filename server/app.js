const cors = require("cors");
const express = require("express");
const path = require("path");
let app = express();

let data = require("./data.json");
const { PORT = 3001, NODE_ENV = "development" } = process.env;

app.use(express.static("public"));

app.use("/static", express.static("public"));
app.use(cors());
app.use("/products/:pageNumber/:pageSize", getProducts);

function paginate(array, pageSize, pageNumber) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

function getProducts(req, res, next) {
  let pageNumber = req.params.pageNumber;
  let pageSize = req.params.pageSize;
  let paginatedArray = paginate(data.products, pageSize, pageNumber);
  let obj = {};
  obj.products = paginatedArray;
  res.json(obj);
}

app.listen(PORT, () => {
  console.log("Server connected at:", PORT);
});
