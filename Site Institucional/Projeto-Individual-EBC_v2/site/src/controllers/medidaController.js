var medidaModel = require("../models/medidaModel");


function pegarPontosController(req, res) {

    var idusuario = req.body.idUsuario; 

    medidaModel.pegarPontosModel(idusuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarUltimosPontosController(req, res) {

    var idusuario = req.body.idUsuario; 

    medidaModel.pegarUltimosPontosModel(idusuario).then(function (resultado) {
        console.log(typeof resultado)
        console.log(`tamanho`, resultado.length)
        if (resultado.length > 0) {
        console.log(`Deu certo!`)    
            res.status(200).json(resultado);
        } else {
            console.log(`Deu errado!`)
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarRankUsuariosController(req, res) {

    medidaModel.pegarRankUsuariosModel().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    pegarPontosController,
    pegarUltimosPontosController,
    pegarRankUsuariosController

}