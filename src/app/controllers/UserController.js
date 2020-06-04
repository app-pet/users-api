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
        const phone = req.params.id;
        let user = await userService.findUserByPhone(phone);
        if (!user) {
            return res.status(400).send('Usuário não cadastrado');
        }
        return res.json(user);
    }

    async store(req, res) {
        const { phone } = req.body
        let user = await userService.findUserByPhone(phone);
        if (user) {
            return res.status(400).send('Usuário já cadastrado');
        }
        user = await userService.createUser(req.body)
        return res.status(201).json(user);
    }

    async update(req, res) {
        const phone = req.params.id;
        let user = await userService.findUserByPhone(phone);
        if (!user) {
            return res.status(400).send('Usuário não cadastrado');
        }
        user = await userService.findByIdAndUpdate(user._id, req.body, { new: true });
        return res.json(user);
    }

    async destroy(req, res) {
        const phone = req.params.id;
        let user = await userService.findUserByPhone(phone)
        if (!user) {
            return res.status(400).send('Usuário não cadastrado');
        }

        user = await userService.findByIdAndRemove(user._id);
        return res.send();
    }
}

module.exports = new UserController()