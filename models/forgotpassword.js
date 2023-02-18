const mongoose = require('mongoose')
const Schema =mongoose.Schema;
const forgotpasswordSchema = new Schema({
    active:{
        type:Boolean
    },
    expiresby:{
        type:Date
    }
})

module.exports=mongoose.model('Forgotpassword',forgotpasswordSchema)