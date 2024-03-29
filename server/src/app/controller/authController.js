const express = require("express");
const userModel = require("../models/user.model");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const mailer = require("../../modules/mailer");
const authConfig = require("../../config/auth");

function genereteToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

router.post("/register", async (req, res) => {
  const { email } = req.body;
  try {
    if (await userModel.findOne({ email }))
      return res.status(400).send({ error: "User already exists" });

    const user = await userModel.create(req.body);

    user.password = undefined;

    return res.send({ user, token: genereteToken({ id: user.id }) });
  } catch (error) {
    return res.status(400).send({ error: "Registration faliled" });
  }
});

router.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) return res.status(400).send({ error: "Usuário não cadastrado!" });

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: "Senha incorreta!" });

  user.password = undefined;

  res.send({ user, token: genereteToken({ id: user.id }) });
});

router.post("/forgot_password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).send({ error: "User not found" });

    const token = crypto.randomBytes(20).toString("hex");
    const now = new Date();
    now.setHours(now.getHours() + 1);

    await userModel.findByIdAndUpdate(user.id, {
      $set: {
        passwordResetToken: token,
        passwordResetExpires: now,
      },
    });

    mailer.sendMail(
      {
        to: email,
        from: "luiz@gmail.com",
        template: "auth/forgot_password",
        context: { token },
      },
      (err) => {
        if (err)
          return res
            .status(400)
            .send({ error: "Cannot send forgot password email" });

        return res.send();
      }
    );
  } catch (error) {
    res.status(400).send({ error: "Error on forgot password, try again" });
  }
});

router.post("/reset_password", async (req, res) => {
  const { email, token, password } = req.body;
  try {
    const user = await userModel
      .findOne({ email })
      .select("+passwordResetToken passwordResetExpires");

    if (!user) return res.status(400).send({ error: "User not found" });

    if (token !== user.passwordResetToken)
      return res.status(400).send({ error: "Token invalid" });

    const now = new Date();

    if (now > user.passwordResetExpires)
      return res
        .status(400)
        .send({ error: "Token expired, generate a new one" });

    user.password = password;

    await user.save();

    res.send();
  } catch (error) {
    res.status(400).send({ error: "Cannot reset password, try again" });
  }
});

module.exports = (app) => app.use("/auth", router);
