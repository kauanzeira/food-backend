import express, { Router } from "express";
import cors from "cors";
import routeProduto from "./routes/route.produtos.js";
import routePedido from "./routes/route.pedidos.js";

const app = express();

app.use(express.json());
app.use(cors());

// Rotas
app.use(routeProduto);
app.use(routePedido);


//Levanta servidor
app.listen(3001, function(){
    console.log("Servidor executando na porta 3001");
});