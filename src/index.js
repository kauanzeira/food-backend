import express from "express";
import cors from "cors";
import { con } from "./config/database.js";

const app = express();

app.use(express.json());
app.use(cors());

// Rotas
app.get("/olamundo", function(rec, res){
    res.status(200).send("Ola mundo!")
});

app.get("/produtos", function(req, res){
    con.query('select * from produto', function (err, result){
        if (err)
            return res.status(500).send("Ocorreu um erro: " + err.message);
        else
            return res.status(200).json(result);
    })
});

//Levanta servidor
app.listen(3001, function(){
    console.log("Servidor executando na porta 3001");
});