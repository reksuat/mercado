const mercadoController = require("../controllers/mercado")
const fornecedorController = require("../controllers/fornecedor")

module.exports = modelo;

let proxId = 1;

function modelo(body, id= proxId++) {
        if (
            body.nome != "" &&
            body.nome != undefined &&
            body.quantidade != "" &&
            body.quantidade != undefined &&
            mercadoController.show(body.mercadoId) &&
            fornecedorController.show(body.fornecedorId) 
        ) {
            return {
                id,
                nome: body.nome,
                quantidade: body.quantidade,
                mercadoId: body.mercadoId,
                fornecedorId: body.fornecedorId
            }
        }
}