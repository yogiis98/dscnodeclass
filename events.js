const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ events: [] });
});
router.post("/", (req, res, next) => {
  res.json({ new_events: req.body });
});


router.get("/:eventName", (req, res, next) => {
  res.json({ name: req.params.eventName });
});

module.exports = router;
