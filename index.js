const express = require("express")

const app = express()

const PORT = process.env.PORT || 3000;

app.get("/", function(req, res){
    res.json({mensaje: "ESTE ES MI MENSAJE DESDE NODE"})
});

app.get("/hola", function(req, res){
    res.json({mensaje: "SALUDOS DESDE EL PROYECTO DE NODE"})
});

app.listen(PORT, () => {
    console.log("Servidor Iniciado...");
})