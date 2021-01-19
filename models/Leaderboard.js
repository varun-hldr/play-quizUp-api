const mongoose = require("mongoose");

const LeaderboardSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  avatar: String,
});

module.exports = mongoose.model("Leaderboard", LeaderboardSchema);
