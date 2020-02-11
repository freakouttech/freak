const express = require("express");
const path = require("path");

const app = express();
const { PORT } = process.env;
const maxAge = "30d";
const staticOption = {
  maxAge,
  immutable: true
};

const cahchedShortenLink = [];

const axios = require("axios");

app.use(express.json());

app.use(
  "/static",
  express.static(path.join(__dirname, "build/static"), staticOption)
);

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get(`/bezos*`, (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/diagnostic", (req, res) => {
  res.send("OKAY");
});

app.listen(8000, () => {
  console.log(`web app listening on port ${PORT}`);
});
