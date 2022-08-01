const express = require("express");
const userModel = require("../src/models/user.model");

const app = express();

const port = 8080;

app.listen(port, () => console.log(`Rodando Server Express, porta: ${port}!`));
