const express = require("express");
const fornecedorController = require("../controllers/fornecedor");

const router = express.Router();

router.get("/", (req,res) =>{
    res.json(fornecedorController.index())
})
router.get("/:id", (req,res)=>{
    res.json(fornecedorController.show(req.params.id))
})
router.post("/", (req,res)=>{
    const code = fornecedorController.create(req.body)
    res.status(code).json
})
router.put("/:id", (req,res)=>{
    const code = fornecedorController.update(req.body, req.params.id)
    res.status(code).json
})
router.delete("/:id", (req,res)=>{
    res.json(fornecedorController.destroy(req.params.id))
})
module.exports = router
