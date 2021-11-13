const mongoose = require("../DB/conexionBD")

const usuarioSchema = mongoose.Schema({
    nombreUsuario: String,
    correoElectronico: String,
    profesion: String,
    numeroContacto: String,
    areaDeConocimiento: String
}, {
    Collection: "usuarios",
    versionKey: false
});

const usuarioDAO = mongoose.model('usuarios', usuarioSchema);

module.exports = usuarioDAO;