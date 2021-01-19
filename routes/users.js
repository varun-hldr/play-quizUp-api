const express = require("express");
const router = express();
const Users = require("../models/Users");

// All Users

router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

// Submit Users

router.post("/", async (req, res) => {
  const users = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    avatar: req.body.avatar,
    quizList: req.body.quizList,
  });
  try {
    const savedUsers = await users.save();
    res.json(savedUsers);
  } catch (err) {
    res.json({ message: err });
  }
});

// Specific User

router.get("/:userId", async (req, res) => {
  try {
    const users = await Users.findById(req.params.userId);
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete User

router.delete("/:userId", async (req, res) => {
  try {
    const users = await Users.remove({ _id: req.params.userId });
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a User

router.patch("/:userId", async (req, res) => {
  try {
    const users = await Users.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          avatar: req.body.avatar,
          quizList: req.body.quizList,
        },
      }
    );

    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
