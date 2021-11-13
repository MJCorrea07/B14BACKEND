const mongoose = require("../DB/conexionBD")

const facturasSchema = mongoose.Schema({
    codigo: String,
    fecha: String,
    total: String,
    productos: [{
        nombre: String,
        valorUnitario: Number,
        cantidad: Number
    }]
}, {
    Collection: "Facturas",
    versionKey: false
});

const facturasDAO = mongoose.model('Facturas', facturasShcema);

module.exports = facturasDAO;