const mongoose = require("mongoose");

const EntregaSchema = new mongoose.Schema(
    {
        func: [
            {
                matricula: {type: String},
                nome: {type: String},
                perfil: {type: String},
            }
        ],
        equipamento: [
            {
                numero: {type: String},
                numserie: {type: String},
                tipo: {type: String, required: true},
            }
        ],
        corda: {type: Boolean},
        capinha: {type: Boolean},
        botao: {type: Boolean},
        tela: {type: Boolean},
        conector:{type: Boolean},
    },
    {timestamps: true}
    
)

module.exports = mongoose.model("Entrega", EntregaSchema);