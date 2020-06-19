const express = require('express')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express()
app.use(express.json())
require('dotenv/config');
mongoose.connect(process.env.MONGODB_CONNECTIONSTRING,{useNewUrlParser: true,useUnifiedTopology: true});
requireDir('../src/app/models');
app.use('/api', require('../src/routes'))

app.listen(process.env.PORT || 3000)

module.exports = app