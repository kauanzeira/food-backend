import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Rotas
app.get("/olamundo", function(rec, res){
    res.status(200).send("Ola mundo!")
});

//Levanta servidor
app.listen(3001, function(){
    console.log("Servidor executando na porta 3001");
});