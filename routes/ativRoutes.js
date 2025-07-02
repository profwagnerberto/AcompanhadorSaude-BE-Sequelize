const express = require("express");
const router = express.Router();
const ativController = require("../controllers/ativController");

router.post("/", ativController.incluir);

router.get("/:id", ativController.pegarPeloId);

router.put("/:id", ativController.alterar);

router.delete("/:id", ativController.excluir);

module.exports = router;
