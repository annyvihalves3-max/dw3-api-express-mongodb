// MODEL DE GAMES
// Importando o mongoose
import mongoose from "mongoose";

// Criando o schema de Games
const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    platform: String,    
    price: Number
})

const Game = mongoose.model('Game', gameSchema)

export default Game;