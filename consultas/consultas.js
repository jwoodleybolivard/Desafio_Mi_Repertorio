const { error } = require('console');
const { Pool } = require('pg');
require('dotenv').config();

// Crear conexión a la base de datos utilizando variables de entorno
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// Función para insertar una nueva canción en la base de datos
async function insertar(titulo, artista, tono) {
    try {
        const result = await pool.query({
            text: 'INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *',
            values: [titulo, artista, tono]
        });
        return result.rows[0];
    } catch (error) {
        throw error; // Lanzar error para ser manejado en el lugar donde se llama a la función
    }
}

// Función para obtener todas las canciones de la base de datos
async function obtener() {
    try {
        const result = await pool.query({
            text: 'SELECT * FROM canciones'
        });
        return result.rows;
    } catch (error) {
        throw error; // Lanzar error para ser manejado en el lugar donde se llama a la función
    }
}

// Función para editar una canción en la base de datos
async function editar(id, titulo, artista, tono) {
    try {
        const result = await pool.query({
            text: 'UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *',
            values: [titulo, artista, tono, id]
        });
        return result.rows[0];
    } catch (error) {
        throw error; // Lanzar error para ser manejado en el lugar donde se llama a la función
    }
}

// Función para eliminar una canción de la base de datos
async function borrar(id) {
    try {
        const result = await pool.query({
            text: 'DELETE FROM canciones WHERE id = $1 RETURNING *',
            values: [id]
        });
        return result.rows[0];
    } catch (error) {
        throw error; // Lanzar error para ser manejado en el lugar donde se llama a la función
    }
}

module.exports = { insertar, obtener, editar, borrar, pool };
