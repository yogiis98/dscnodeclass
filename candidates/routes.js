const express = require("express");
const getDetail = require('./lib');
const router = express.Router();

router.get("/:candidateId", (req, res, next) => {
  const resp = getDetail(req.params.candidateId);
  res.json(resp);
});



module.exports = router;
