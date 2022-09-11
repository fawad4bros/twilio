const express = require("express");
const router = express.Router();
const voice = require("../controllers/voice");
const retrieveVoices = require("../controllers/retrieveVoices");
router.post("/voice", voice);
router.get("/voice", retrieveVoices);
module.exports = router;
