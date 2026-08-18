// Serviços de Games
// Aqui será inserido os métodos para Ler, cadastrar, Alterar e Excluir games

// Importando o Model
import Game from "../models/Games.js";

class gameService {
  // Serviço/método para ler os jogos
  async getAll() {
    // Tentativa da promessa (sucesso)
    try {
      //  o método .find() do mongoose busca registros
      const games = await Game.find();
      return games;
      // Caso ocorra um erro será executado o catch
    } catch (error) {
      console.log(error);
    }
  }
  // Método para cadastrar jogos
  async Create(title, year, platform, price) {
    try {
      // Enviando os dados a serem cadastrados para o Model
      const newGame = new Game({
        // title : title, (não precisa escrever o nome do campo duas vezes)
        title,
        year,
        platform,
        price,
      });
      // Aguardar a operação de cadastro
      await newGame.save(); // .save() é o método do mongoose para cadastrar
    } catch (error) {
      console.log(error);
    }
  }
}
// Exportando a classe
export default new gameService();
