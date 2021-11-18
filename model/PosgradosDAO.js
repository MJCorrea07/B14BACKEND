const mongoose = require("../DB/conexionBD")

const posgradoSchema = mongoose.Schema({
    nombrePosgrado: String,
    universidad: [{
        idUniversidad: String,
        nombreUniversidad: String
    }],
    materias: [{
        nombreMateria: String,
        intensidadHoraria: String,
        descripcion: String
    }]
}, {
    Collection: "Posgrados",
    versionKey: false
});

const posgradosDAO = mongoose.model('posgrados', posgradoSchema);

module.exports = posgradosDAO;