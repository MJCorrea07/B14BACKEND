const mongoose = require("../DB/conexionBD")

const universidadSchema = mongoose.Schema({
    nombreUsuario: String,
    correoElectronico: String,
    profesion: String,
    numeroContacto: String,
    areaDeConocimiento: String
}, {
    Collection: "universidades",
    versionKey: false
});

const universidadDAO = mongoose.model('universidades', universidadSchema);

module.exports = universidadDAO;