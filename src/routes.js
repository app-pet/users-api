const routes = require('express').Router()
const UserController = require('./app/controllers/UserController')

/**
 * @swagger
 * path:
 *  /users/:
 *    get:
 *      tags:
 *          - Users
 *      summary: Lista de Usuários
 *           
 *      responses:
 *        "200":
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *               
 */
routes.get('/users', UserController.index)

module.exports = routes