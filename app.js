const { application, response, request } = require("express");
const { stringify } = require("nodemon/lib/utils")
const express = require("express")
const cors = require("cors")
const usuariosCtrl = require("./controller/usuariosCtrl")
const universidadesCtrl = require("./controller/universidadesCtrl")

const app = express();
app.use(express.json());
app.use(cors);

app.get('/api/usuarios', async(request, response) => {
    let usuarios = await usuariosCtrl.listar();
    response.status(200).json(usuarios);
});

app.post('/api/usuarios', async(request, response) => {
    const usuario = request.body;
    try {
        await usuariosCtrl.insertar(usuario);
        response.status(200).json(usuario);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }
});

app.put('/api/usuarios', async(request, response) => {
    const usuario = request.body;
    try {
        await usuariosCtrl.actualizar(usuario);
        response.status(200).json(usuario);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }
});


app.delete('/api/usuarios/:id', async(request, response) => {
    let id = request.params.id
    console.log(id);
    await usuariosCtrl.eliminar(id);
    response.status(204).send("usuario Eliminada");
});

app.listen(1400, () => {
    console.log('Servidor corriendo');
})