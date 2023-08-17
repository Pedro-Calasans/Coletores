const mongoose = require("mongoose");

const FuncSchema = new mongoose.Schema(
    {
        matricula: {type: String, required: true, unique: true},
        nome: {type: String, required: true, unique: true},
        perfil: {type: String, },
        //img:{type:String},
        //isAdmin: {
           // type: Boolean,
           //default: false
        //},


    },
    {timestamps: true}
)

module.exports = mongoose.model("Func", FuncSchema);