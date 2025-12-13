const mongoose = require('mongoose')

const hashSchema = new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    
})

const hashedUser = mongoose.model('hashuser',hashSchema)

module.exports = hashedUser