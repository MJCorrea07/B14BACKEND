const mongoose = require("../DB/conexionBD")

const posgradoSchema = mongoose.Schema({
    nombrePosgrado: String,
    universidad: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "universidades"
        }]
    },
    pensum: [{
        nombreMateria: String,
        intensidadHoraria: String
    }]
}, {
    Collection: "Posgrados",
    versionKey: false
});

const posgradosDAO = mongoose.model('posgrados', posgradoSchema);

module.exports = posgradosDAO;