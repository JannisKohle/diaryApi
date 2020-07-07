const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  res.send("list of diaries");
});

router.post("/", (req, res) => {
  res.send("add new diary");
});

router.delete("/", (req, res) => {
  res.send("delete diary");
});

router.patch("/", (req, res) => {
  res.send("update diary");
});

////////////////

router.get("/:diaryId", (req, res) => {
  res.send("get diary info");
});

router.post("/:diaryId", (req, res) => {
  res.send("create new page");
});

router.delete("/:diaryId", (req, res) => {
  res.send("delete diary page");
});

router.patch("/:diaryId", (req, res) => {
  res.send("update diary");
});

router.put("/:diaryId", (req, res) => {
  res.send("update diary");
});

////////////////

router.get("/:diaryId/:pageId", (req, res) => {
  res.send("get diary page");
});

router.put("/:diaryId/:pageId", (req, res) => {
  res.send("update diary page");
});

module.exports = router;
