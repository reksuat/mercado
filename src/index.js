const express = require("express");
const mercadoRouter = require("./routes/mercado");
const fornecedorRouter = require("./routes/fornecedor");
const produtoRouter = require("./routes/produto");
const app = express()
const port = 4000

app.use(express.json())

app.use("/fornecedor", fornecedorRouter);
app.use("/mercado", mercadoRouter);
app.use("/produto", produtoRouter)

app.listen(port, ()=>{
    console.log("Server is running..");
    
})