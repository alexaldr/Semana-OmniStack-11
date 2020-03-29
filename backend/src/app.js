const express = require("express");

const cors = require("cors");

const { errors } = require("celebrate");

const routes = require("./routes");

const app = express();

app.use(cors());

// define json para requisições
app.use(express.json());

app.use(routes);

// validação
app.use(errors());

// app.listen(3333);
module.exports = app;

/**
 * instalar nodemon como dependência de desenvolvimento
 * npm install nodemon -D
 */

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: alterar uma informação no backend
 * DELETE: deletar uma informação no backend
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos (ex: ":id")
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users).select('*').where()
 *
 * npm install knex
 * npm install sqlite3
 */

/**
 * Entidades Banco Dados:
 *     ONG
 *     Caso(incident)
 */

/**
 * Funcionalidades:
 *    Login de ONG
 *    Logout de ONG
 *    Cadastro de ONG
 *    Cadastrar novos casos
 *    Deletar casos
 *    Listar casos específicos de uma ONG
 *    Listar todos os casos
 *    Entrar em contato com a ONG
 */
