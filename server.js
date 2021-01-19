// Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

const routes = require("./routes/users");
const LeaderRoutes = require("./routes/Leaderboard");

// Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Step 2
mongoose.connect(
  "mongodb+srv://varun:varun123@cluster0.q4zuc.mongodb.net/rest?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// HTTP request logger
app.use(morgan("tiny"));
app.use("/users", routes);
app.use("/leaderboard", LeaderRoutes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
