// Importar o Express
import express from "express";
// Importar o Mongoose
import mongoose from "mongoose"
// Importar o Model
import Game from "./models/Games.js"
// Importar as rotas (endpoints)
import gameRoutes from './routes/gameRoutes.js'

// Carregando Express
const app = express();

// Configurações do Express
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Carregando as rotas de games
app.use('/', gameRoutes)

// Iniciando a conexão com o MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/apithegames")

// Iniciando o servidor da API
const port = 4000;
app.listen(port, (error) => {
    if (error) {
        console.log("Ocorreu um erro ao iniciar a API!" + error);
    } else {
        console.log("API iniciada com sucesso na porta " + port);
    }
});