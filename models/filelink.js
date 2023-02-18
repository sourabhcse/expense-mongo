const mongoose = require('mongoose')
const Schema =mongoose.Schema;
const fileSchema = new Schema({
    fileURl:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Filelink',fileSchema)