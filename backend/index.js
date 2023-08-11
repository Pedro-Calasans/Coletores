const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config();


const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL).
then(() => console.log("conectado"))
    .catch(()=>(err)=>console.log("err"))

app.get("api/test", () =>{
    console.log("Teste deu certo")
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Rodando na porta 5000");
    });