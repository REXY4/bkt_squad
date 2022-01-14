"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./src/routers");
require("dotenv").config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/v1", router);
//port test


app.use("/", (req, res) => {
  res.send("Hallo Bagurau");
});

const port = 9000;
app.listen(port, () => console.log(`Running on port ${port}`));