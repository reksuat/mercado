const modelo = require("../models/fornecedor");

const db = []

const index = () => db;

const show = id => db.find(el => el.id == id)

function create(body) {
    const novo = modelo(body)
    if (body) {
        db.push(novo)
        return 201;
    }   
    return 400
}
function update(body, id) {
    const novo = modelo(body, parseInt(id))
    const index = db.findIndex(el => el.id  == id)

    if (novo && index!= -1) {
        db[index] = novo;
        return 200
    }
    return 400
}
function destroy(id) {
    const index = db.findIndex(el => el.id == id)
    if (index!= -1) {
        db.splice(index, 1)
    }
}

module.exports= {
    index,
    show,
    create,
    update,
    destroy
}