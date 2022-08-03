const dotenv = require("dotenv");
const connectToDatabase = require("./database/index");

dotenv.config();

connectToDatabase();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./app/controller/index")(app);

app.listen(8080);
