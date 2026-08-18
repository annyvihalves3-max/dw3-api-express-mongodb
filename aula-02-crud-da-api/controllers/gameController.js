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

// Função que irá tratar a requisição para CADASTRAR o jogos
const createGame = async (req,res) => {
    try {
        // const title = req.body.title
        // const year = req.body.year

        // Coletando dados enviados (formulário, da requisição, etc...) e gravando nas variáveis
        // simplificado 
        const {title, year, platform, price} = req.body

        // Enviando dados para o Service cadastrar
        await gameService.Create(title, year, platform, price);
        res.status(201).json({message: "Jogo cadastrado com sucesso!"})
        // Cod. 201 (CREATED) -> Recurso criado com sucesso no servidor

    } catch (error){
        console.log(error)
        res.status(500).json({error: "Erro interno no servidor."})
    }
}

// Exportando as funções
export default { getAllGames, createGame }