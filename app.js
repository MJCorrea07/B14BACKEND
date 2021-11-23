const { stringify } = require("nodemon/lib/utils")
const { request, response } = require("express");
const express = require("express");
const cors = require("cors");
const usuariosCtrl = require("./controller/usuariosCtrl");
const universidadesCtrl = require("./controller/universidadesCtrl");
const posgradosCtrl = require("./controller/posgradosCtrl");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use(helmet());

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
    try {
        let id = request.params.id;
        await usuariosCtrl.eliminar(id);
        response.status(204).send("Usuario Eliminado");
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }
});

app.get('/api/universidades', async(request, response) => {
    try {
        const universidades = await universidadesCtrl.listar();
        response.status(200).send(universidades);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }

});

app.post('/api/universidades', async(request, response) => {
    try {
        const data = request.body
        const universidad = await universidadesCtrl.insertar(data);
        response.status(200).send(universidad)
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }

})

app.get('/api/posgrados', async(request, response) => {
    try {
        const posgrados = await posgradosCtrl.listar();
        response.status(200).send(posgrados);
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }

});

app.post('/api/posgrados', async(request, response) => {
    try {
        const data = request.body
        const posgrado = await posgradosCtrl.insertar(data);
        response.status(200).send(posgrado)
    } catch (error) {
        console.log(error);
        response.status(400).send(error);
    }

})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto: ' + PORT)
})