const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(express.json())

// connect to database :
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/lms',{useNewUrlParser:true},{useUnifiedTopology:true})


//routes : 
const CourseRoutes = require('./src/routes/CourseRoute')
app.use('/courses',CourseRoutes)
server.listen('8000',(req,res)=>{
    console.log('server is running on port : 8000');
})