var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/pegarPontos", function (req, res) {
    console.log('Chegou na rota!')
    medidaController.pegarPontosController(req, res);
});

module.exports = router;