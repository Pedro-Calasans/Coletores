const mongoose = require("mongoose");

const EquipamentoSchema = new mongoose.Schema(
    {
        numero: {type: String, required: true, unique: true},
        numserie: {type: String, required: true, unique: true},
        tipo: {type: String, required: true},
        //img:{type:String},
        //isAdmin: {
           // type: Boolean,
           //default: false
        //},


    },
    {timestamps: true}
)

module.exports = mongoose.model("Equipamento", EquipamentoSchema);