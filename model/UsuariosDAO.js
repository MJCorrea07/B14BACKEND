const mongoose = require("../DB/conexionBD")

const usuarioSchema = mongoose.Schema({
    nombreUsuario: String,
    numeroContacto: String,
    email: String,
    areaDeInteres: String,
    intereses: [{
        nombreUniversidad: String,
        nombrePosgrado: Number,
    }]
}, {
    Collection: "usuarios",
    versionKey: false
});

const usuarioDAO = mongoose.model('usuarios', usuarioSchema);

module.exports = usuarioDAO;