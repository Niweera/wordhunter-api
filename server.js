const express = require("express");
const bodyParser = require("body-parser");
var favicon = require("serve-favicon");
const path = require("path");

const v1Main = require("./routes/v1/main");

const app = express();
app.use(favicon(path.join(__dirname, "./favicon.png")));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Routes
app.use("/", v1Main); //this route must be at the end

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
