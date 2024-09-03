const express = require("express");
const produtoController = require("../controllers/produto");

const router = express.Router();

router.get("/", (req,res) =>{
    res.json(produtoController.index())
})
router.get("/:id", (req,res)=>{
    res.json(produtoController.show(req.params.id))
})
router.post("/", (req,res)=>{
    const code = produtoController.create(req.body)
    res.status(code).json
})
router.put("/:id", (req,res)=>{
    const code = produtoController.update(req.body, req.params.id)
    res.status(code).json
})
router.delete("/:id", (req,res)=>{
    res.json(produtoController.destroy(req.params.id))
})
module.exports = router