import express from "express";
import { data } from "./data";

const app = express();

app.get('/api/product/:id', (req, res) => {

  const productId = req.params.id;
  console.log(productId)

  const product = data.products.find(x => x._id === productId);

  if (product)
    res.send(product)
  else
    res.status(404).send({ msg: "Product not Found" })
});

app.get('/api/products', (req, res) => {
  console.log("request", req)
  res.send(data.products)
});

app.listen(5000, () => { console.log(" server started at http://localhost:5000") })