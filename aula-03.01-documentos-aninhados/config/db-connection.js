// Importando o mongoose
import mongoose from "mongoose";

// Usuário e senha do banco de dados
const dbUser = "annyvihalves3_db_user";
const dbPassword = "SM0uaH0JuFuHySOF";


const connect = () => {
    mongoose.connect(
        `mongodb+srv://annyvihalves3_db_user:SM0uaH0JuFuHySOF@cluster0.qxxqdxd.mongodb.net/api-thegames?appName=Cluster0`
    );

    const connection = mongoose.connection;

    connection.on("error", () => {
        console.log("Erro ao conectar com o mongoDB.");
    });

    connection.on("open", () => {
        console.log("Conectado ao mongoDB com sucesso!");
    });
};

connect();

export default mongoose;