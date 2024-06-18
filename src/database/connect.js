    const mongoose = require("mongoose");

    const connectToDatabase = async () => {
    try {
        await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.ru3l0ks.mongodb.net/database?retryWrites=true&w=majority&appName=CursoNodeJs`
        );
        console.log("Conexão estabelecida com a base de dados!");
    } catch (error) {
        console.log("Ocorreu um erro na conexão da base de dados.:", error);
    }
    };

    module.exports = connectToDatabase;
