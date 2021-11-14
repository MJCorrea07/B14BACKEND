const mongoose = require("../DB/conexionBD")

const usuarioSchema = mongoose.Schema({
    nombreUsuario: String,
    numeroContacto: Number,
    email: String,
    areaDeInteres: String,
    intereses: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "posgrados"
        }]
    },
}, {
    Collection: "usuarios",
    versionKey: false
});

const usuarioDAO = mongoose.model('usuarios', usuarioSchema);

module.exports = usuarioDAO;