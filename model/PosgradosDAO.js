const mongoose = require("../DB/conexionBD")

const posgradoSchema = mongoose.Schema({
    nombrePosgrado: String,
    universidad: [{
        nombreUniversidad: String
    }],
    pensum: [{
        nombreMateria: String,
        intensidadHoraria: String
    }]
}, {
    Collection: "Posgrados",
    versionKey: false
});

const posgradosDAO = mongoose.model('posgrados', posgradosShcema);

module.exports = posgradosDAO;