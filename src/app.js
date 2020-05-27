const express = require('express')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

class AppController{
    constructor(){
        const app = express()
        app.use(express.json())

        require('dotenv/config');

        //this.database()        
        requireDir('./app/models');

        app.use('/api', require('./routes'))

        return app
    }

    database(){
        mongoose.connect(process.env.MONGODB_CONNECTIONSTRING,
            { 
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        
    }
}



module.exports = new AppController()