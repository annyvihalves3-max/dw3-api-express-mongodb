//importando o Express
import express, { urlencoded } from "express";
//importando o mongoose
<<<<<<< HEAD
import mongoose from "mongoose";
// Iniciando conexão com o bando de dados do mongodb
import mongoose from "./config/db.connection.js";
=======
// import mongoose from "mongoose";
>>>>>>> 2ed2116b7bdafb4b1acbc756f4a4e1289b3ab926
//importando o model
import Game from "./models/Games.js";
//importar as rotas
import gameRoutes from "./routes/gameRoutes.js";

import mongoose from './config/db.connection.js';


//carregando o express
const app = express();

//configurações do express
app.use(express.json());
app.use(express.urlencoded({extend : false}));

app.use("/", gameRoutes);

//iniciando a conexão com o MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/apithegames_aninhado");

//iniciando o servidor da API
const port = 4000;
app.listen(port, (error) => {
    if(error) {
        console.log("Ocorreu um erro ao iniciar a API!" + error);
    } else {
        console.log("API iniciada com sucesso na porta " + port);
    }
});