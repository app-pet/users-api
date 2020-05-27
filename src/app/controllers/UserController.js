const userService = require('../services/UserService');

class UserController {
    constructor(){
        
    }

    async index(req, res) {
        const { page = 1 } = req.query;
        const users = await userService.findAll(page);
        return res.json(users);
    }

    async show(req, res) {
        const id = req.params.id;

        let user = await userService.findOne({ _id: id})

        if (!user) {
            return res.status(400).send('Usuário não cadastrado');
        }

        return res.json(user);
    }

    async store(req, res) {

    }

    async update(req, res) {

    }

    async destroy(req, res) {

    }
}

module.exports = new UserController()