var database = require("../database/config");

function pegarPontosModel(idusuario) {
    instrucaoSql = `select sum(pontos) as 'Pontos', id from Quiz join usuario on fkUsuario = ${idusuario} group by id;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pegarUltimosPontosModel(idusuario) {
    instrucaoSql = `select id, idPartida, pontos, horaPartida from usuario join Quiz on fkUsuario = id and id = ${idusuario} order by idPartida desc limit 5;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pegarRankUsuariosModel() {
    instrucaoSql = `select * from (select id, nome, sum(pontos) as 'pontos' from usuario join Quiz on fkUsuario = id group by id) as rankin order by pontos desc limit 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    pegarPontosModel,
    pegarUltimosPontosModel,
    pegarRankUsuariosModel
}
