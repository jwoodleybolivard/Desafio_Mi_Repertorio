const express = require("express");
const errores = require("./errores.js"); // Importar el módulo de manejo de errores
const { insertar, obtener, editar, borrar } = require("./consultas/consultas.js"); // Importar las funciones de consultas
const app = express();
const port = process.env.PORT || 3000; // Utilizar el puerto especificado en las variables de entorno o el puerto 3000 por defecto

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Ruta para servir el archivo HTML
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Ruta para agregar una nueva canción
app.post("/cancion", async (req, res) => {
    try {
        const { titulo, artista, tono } = req.body; // Renombrar las variables para ser más descriptivas

        // Verificar si los campos están vacíos
        if (!titulo || !artista || !tono) {
            throw { code: "400" };
        }

        const nuevaCancion = await insertar(titulo, artista, tono); // Utilizar la función de inserción
        res.status(201).json(nuevaCancion); // Enviar la nueva canción como respuesta
    } catch (error) {
        errores(error, res); // Manejar el error con la función de manejo de errores
    }
});


// Ruta para obtener todas las canciones
app.get("/canciones", async (req, res) => {
    try {
        const canciones = await obtener(); // Obtener todas las canciones
        res.json(canciones);
    } catch (error) {
        errores(error, res); // Manejar el error con la función de manejo de errores
    }
});

// Ruta para editar una canción
app.put("/cancion/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, artista, tono } = req.body;

        // Verificar si los campos están vacíos
        if (!titulo || !artista || !tono) {
            throw { code: "400" };
        }

        await editar(id, titulo, artista, tono); // Utilizar la función de edición
        res.send(`La canción con ID ${id} ha sido editada correctamente`);
    } catch (error) {
        errores(error, res); // Manejar el error con la función de manejo de errores
    }
});

// Ruta para eliminar una canción
app.delete("/cancion", async (req, res) => {
    try {
        const { id } = req.query;
        await borrar(id); // Utilizar la función de eliminación
        res.send(`La canción con ID ${id} ha sido eliminada correctamente`);
    } catch (error) {
        errores(error, res); // Manejar el error con la función de manejo de errores
    }
});


// Iniciar el servidor
app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}, el enlace es http://localhost:${port}`));