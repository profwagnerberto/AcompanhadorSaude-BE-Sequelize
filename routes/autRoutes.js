const express = require("express");
const router = express.Router();
const autController = require("../controllers/autController");

router.post("/criar", autController.criar);
router.post("/entrar", autController.entrar);

module.exports = router;
