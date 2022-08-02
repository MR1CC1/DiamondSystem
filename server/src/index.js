const dotenv = require("dotenv");
const connectToDatabase = require("./database/index");

dotenv.config();

connectToDatabase();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controller/authController")(app);

require("./controller/user")(app);

const port = 8080;
app.listen(port, () => console.log(`Rodando Server Express, porta: ${port}!`));
