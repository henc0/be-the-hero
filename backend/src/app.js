const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


module.exports = app;


// Rota / Recurso

// Métodos HTTP

// GET: Buscar uma informação do backend
// POST: Criar uma informaçáo no backend
// PUT: Alterar uma informação no backend
// DELETE: Deletar uma informação no backend

// Tipos de Parâmetros:
// Query Params: Parâmetros nomeados enviados na rota apôs "?" (Filtros e paginação)
// Route Params: Parâmetros utilizados para identificar recursos
// Request Body: Corpo da requisição, utilizando para criar ou altera recursos

// SQL: MySQL SQLite
// NoSQL: MongoDB

// Driver: SELECT * FROM users
// Query Builder: table('users').('*').where()



