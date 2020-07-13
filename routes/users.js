const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  res.send("list of users");
});

router.post("/", (req, res) => {
  res.send("add new user");
});

router.delete("/", (req, res) => {
  res.send("delete user");
});

router.patch("/", (req, res) => {
  res.send("update user");
});

////////////////

router.get('/:userId', (req, res) => {
  res.send("list of users");
});

router.post("/:userId", (req, res) => {
  res.send("add new user");
});

router.delete("/:userId", (req, res) => {
  res.send("delete user");
});

router.patch("/:userId", (req, res) => {
  res.send("update user");
});

router.put("/:userId", (req, res) => {
  res.send("update user");
});

module.exports = router;
