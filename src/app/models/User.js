const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

//Criando o UserSchema 

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *        type: object
 *        properties:
 *          name:
 *              type: string
 *          phone:
 *              type: string
 *          email:
 *              type: string
 * 
 *        required:
 *          - name
 *          - phone
 *          - email
 *          
 */
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

// Registrando o mongoose paginate da Aplicação
UserSchema.plugin(mongoosePaginate)

// Registrando o schema
mongoose.model('User', UserSchema)