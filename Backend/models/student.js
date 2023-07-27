const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name : {
        type:String,
        required : true
    },
    id : {
        type:String,
        required : true
    },
    department : {
        type : String,
        required : true
    },
    domain:{
        type:String,
        required : true
    },
    phone :{
        type : String,
        required : true
    },
    email:{
        type:String,
        required : true
    },
    higherStudies : {
        type : String,
        required : true
    },
    isPlaced : {
        type : Boolean,
        default: false
    },
    placedCompany : {
        type : String,
        required : false,
        default : ""
    },
    placedRole : {
        type : String,
        required : false,
        default : ""
    },
    placedDate : {
        type : String,
        required : false,
        default : ""
    },
    placedPPO: {
        type : String,
        required : false,
        default : ""
    }
},
{collection : "student"})

module.exports = mongoose.model('student_schema',schema)