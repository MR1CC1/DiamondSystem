const express = require("express");
const userModel = require("../models/user.model");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { email } = req.body;

  try {
    if (await userModel.findOne({ email }))
      return res.status(400).send({ error: "User already exists" });

    const user = await userModel.create(req.body);

    user.password = undefined;

    return res.send({ user });
  } catch (error) {
    return res.status(400).send({ error: "Registration faliled" });
  }
});

router.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+select");
  if (!user) return res.status(400).send({ error: "User not found" });
});

module.exports = (app) => app.use("/auth", router);
