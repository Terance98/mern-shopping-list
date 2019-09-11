const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require('./routes/api/items');

const app = express();

//BodyParser middleware
app.use(bodyParser.json());

//DB config
const DB = require("./config/keys").mongoURI;

mongoose
  .connect(DB)
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));


//Use Routes
app.use('/api/items',items);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
