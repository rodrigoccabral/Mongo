const mongoose = require("mongoose");

//Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
    useMongoClient: true
}).then(() => {
    console.log("Mongodb conectado.");
}).catch((erro) => {
    console.log("Houve um erro ao se conectar ao mongodb: " + erro);
});

// Model - Usuários
//Definindo o model
const UsuarioSchema = mongoose.Schema({

    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
});

// Collection
mongoose.model("usuarios", UsuarioSchema);

//Inserir novo documento usuario na collection usuarios
const Rodrigo = mongoose.model("usuarios");
new Rodrigo({
    nome: "Rodrigo",
    sobrenome: "Cabral",
    email: "rodrigo-cabral@hotmail.com",
    idade: 19,
    pais: "Brasil"
}).save().then(() => {
    console.log("Usuário criado com sucesso.");
}).catch((erro) => {
    console.log("Houve um erro ao registrar o usuario: " + erro);
});