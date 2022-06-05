const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title:String,
    time:Number,
    desc:String
});

const course = mongoose.model('Course',courseSchema) // collection courses will create
module.exports =course;