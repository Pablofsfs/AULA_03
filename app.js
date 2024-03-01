const express = require("express")
const app = express()


app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/", function(req, res){
    console.log("Página Principal")
    res.send("Pagina principal")
})
app.get("/contato", function(req, res){
    console.log("Página Contato")
    res.send("Página Contato")
})

app.get("/produtos/:item", function(req, res){
    res.send("Página de produtos:" + req.params.item)
})

app.get("/carros/:modelo/:ano/:cor", function(req, res){
    res.send("Página de carros: " + req.params.modelo + " ano: "+ req.params.ano + " cor: " + req.params.cor)
})