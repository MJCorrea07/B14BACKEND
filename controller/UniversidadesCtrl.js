const express = require("express")
const universidadDAO = require("../model/universidadesDAO")

const universidadCtrl = {}

universidadCtrl.listar = async() => {
    let universidades = await universidadDAO.find();
    return universidades;
};

/*universidadCtrl.insertar = async(universidad) => {
    return await universidadDAO.create(universidad);
};

universidadCtrl.actualizar = async(universidad) => {
    let id = universidad._id;
    delete universidad._id;
    return await universidadDAO.findOneAndUpdate(id, universidad);
};

universidadCtrl.eliminar = async(id) => {
    await universidadDAO.deleteOne({
        _id: id
    });
};*/

module.exports = universidadCtrl;