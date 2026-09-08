// userController.js:
// CONFIGURANDO AS VARAVEIS DE AMBIENTE (DOTENV)
import dotenv from "dotenv";
dotenv.config()

// Importando o Service
import userService from "../services/userService.js";
// Importando o bcrypt
import bcrypt from "bcrypt";
//importando o jsonwebtoken
import jwt from 'jsonwebtoken';
//criando um segredo para o token
const JWTSecret = process.env.JWTSECRET;

// FUNÇÃO PARA CADASTRAR UM USUÁRIO
const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Gerando o hash de senha
    const salt = bcrypt.genSaltSync(10); // O salt incrementa o hash
    const hash = bcrypt.hashSync(password, salt);
    // Cadastrando o usuário com email e hash de senha
    await userService.Create(email, hash);
    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    // Cod. 201: CREATED
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// FUNÇÃO PARA LOGAR UM USUÁRIO
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validar o email enviado
    if (email != undefined) {
      // Buscando o usuário pelo e-mail
      const user = await userService.getOne(email);
      //verificando se o usuáiro existe
      if (user != undefined) {
        //verificando se a senha está correta
        // Comparando o hash de senha
        const correct = bcrypt.compareSync(password, user.password);

        // Verificando se a senha é válida
        if(correct) {
            // se a senha estiver correta, gera o token
            // Gerando o token, o token pode ser sucesso ou erro
            jwt.sign({id: user._id, email: user.email}, JWTSecret, {expiresIn: '48h'}, (error, token) => {
                //tratando o erro durante a geração do token
                if (error) {
                    res.status(400).json({error: "Não foi possível gerar um token de autenticação."})
                // caso sucesso 
                } else {
                    res.status(200).json({token});
                }
            });
        // Caso senha incorreta
        } else {
          // cod.401 (Unauthorized) - Não autorizado
          res.status(401).json({error: "Credenciais inválidas. Tente novamente!"});
        }
        // Caso o usuário não encontrado
      } else {
        res.status(404).json({error: "O usuário informado não existe."});
      }
      // Caso o e-mail não for preenchido
    } else{
      res.status(400).json({error: "O e-mail enviado é inválido."})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Erro interno do servidor." });
  }
};

export default { createUser, loginUser, JWTSecret };
