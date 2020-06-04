const mongoose = require('mongoose')
const User = mongoose.model('User');

class UserService {
    constructor(){
        
    }
    async findOne(query) {
        return await User.findOne(query)
    }

    async find(query, page) {
        return await User.paginate(query, { page, limit:10 })
    }

    async findAll(page) {
        return await User.paginate({}, { page, limit:10 })
    }
    
    async createUser(user){
        return await User.create(user)
    }
    
    async findByIdAndRemove(id){
        return await User.findByIdAndRemove(id);
    }

    async findByIdAndUpdate(id, user){
        return await User.findByIdAndUpdate(id, user, { new: true })
    }

    async findUserByPhone(phone) {
        return await User.findOne({phone: phone})
    }
}

module.exports = new UserService()