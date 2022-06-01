var database = require("../database/config");

function pegarPontosModel(idusuario) {
    instrucaoSql = `select sum(pontos) as 'Pontos', id from Quiz join usuario on fkUsuario = ${idusuario} group by id;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    pegarPontosModel
}
