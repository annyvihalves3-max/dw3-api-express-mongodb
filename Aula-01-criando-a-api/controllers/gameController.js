// Controller de games
// O controller tratará as requisições do cliente
// Importando o service
import gameService from '../services/gameService.js';

// Função que irá tratar a requisição para LISTAR os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll()
        res.status(200).json({ games: games })
        // Cod. 200 - OK - Requisição feita com sucesso
    } catch (error) {
        console.log(error)
        // Tratando a resposta que api irá enviar em caso de erro
        res.status(500).json({ error: 'Ocorreu um erro ao listar os jogos. Erro interno do servidor.' })
    }
}
// Exportando as funções
export default { getAllGames }