const path = require("path");
const express = require("express");
const app = express();

const publicPath = path.join(__dirname, "dist");
const port = process.env.PORT || 8080;

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.get("/user", (req, res) => {
  res.sendFile(path.join(publicPath, "user.html"));
});

app.get("/contacts", (req, res) => {
  res.sendFile(path.join(publicPath, "contacts.html"));
});

app.get("/pasabahce", (req, res) => {
  res.sendFile(path.join(publicPath, "pasabahce.html"));
});

app.get("/delivery", (req, res) => {
  res.sendFile(path.join(publicPath, "delivery.html"));
});

app.get("/catalog", (req, res) => {
  res.sendFile(path.join(publicPath, "catalog.html"));
});

app.get("/shopping_card", (req, res) => {
  res.sendFile(path.join(publicPath, "shopping_card.html"));
});

app.get("/order", (req, res) => {
  res.sendFile(path.join(publicPath, "order.html"));
});

app.listen(port, () => {
  console.log(`Hello World I run on PORT ${ port}`);
});
