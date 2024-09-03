module.exports = modelo;
let proxId = 1;

function modelo(body, id= proxId++) {
        if (
            body.nome != "" &&
            body.nome != undefined
        ) {
            return {
                id,
                nome: body.nome,
                endereco: body.endereco
            }
        }
}