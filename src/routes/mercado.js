const express = require("express");
const mercadoController = require("../controllers/mercado");
const cep_endereco = require("../middlewares/cep_endereco");

const router = express.Router();

router.get("/", (req,res) =>{
    res.json(mercadoController.index())
})
router.get("/:id", (req,res)=>{
    res.json(mercadoController.show(req.params.id))
})
router.post("/", cep_endereco, (req,res)=>{
    const code = mercadoController.create(req.body)
    res.status(code).json(req.body)
})
router.put("/:id", cep_endereco,  (req,res)=>{
    const code = mercadoController.update(req.body, req.params.id)
    res.status(code).json(req.body)
})
router.delete("/:id", (req,res)=>{
    res.json(mercadoController.destroy(req.params.id))
})
module.exports = router