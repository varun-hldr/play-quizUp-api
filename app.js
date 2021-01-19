const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const app = express();
let port = process.env.PORT || 8760;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const usersRoutes = require("./routes/users");

app.use("/users", usersRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Connect to DB
mongoose.connect(
  "mongodb+srv://varun:varun123@cluster0.q4zuc.mongodb.net/rest?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB!");
  }
);

// How we start Listening to the server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
