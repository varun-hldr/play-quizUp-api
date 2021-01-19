const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  avatar: String,
  quizList: Array,
});

module.exports = mongoose.model("Users", UsersSchema);
