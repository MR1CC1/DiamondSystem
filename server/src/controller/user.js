const express = require("express");
const userModel = require("../models/user.model");
const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    const users = await userModel.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = (app) => app.use("/users", router);
