const express = require("express");
const router = express.Router();
const {
  createProof,
  verifyProof
} = require("../controllers/verifyController");

router.post("/create", createProof);
router.post("/verify", verifyProof);

module.exports = router;
