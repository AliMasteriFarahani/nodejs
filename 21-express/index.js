const express = require('express');
// const res = require('express/lib/response');
app = express()
const http = require('http')
const server = http.createServer(app);
const dotenv = require('dotenv');
dotenv.config();
app.use(express.static('public'))


// access to body 
//-----------------
// way one : 
//-----------
app.use(express.urlencoded({extended:false}))
app.use(express.json())

const {body,validationResult} = require('express-validator')

// way two :
//-----------
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json())


let userRouter = require('./src/routes/userRoutes');
app.use('/user',userRouter)


// global middleware :
//---------------------
// app.use((req,res,next)=>{
//     if (req.headers['token'] == 'token') {
//         next();
//     }else{
//         res.status(401).json({'msg':'not auth'})
//     }
// })


app.get('/',(req,res)=>{
    console.log(req)
    res.status(201).json({param:req.query,page:'main'})
    // res.send('home page')
})
app.post('/',(req,res)=>{
    res.json({name:'ahmad'})
})

app.post('/getname',(req,res)=>{
    console.log(req.headers['content-type']);
    res.json({body:req.body})
})

app.get('/about-us',(req,res)=>{
    res.send('about us page')
})

// middleware
app.get('/users/:age',(req,res,next)=>{
    if (req.params.age > 15) {
        next();
    }else{
        res.status(401).json({'msg':'not allow'})
    }
},(req,res)=>{
    res.status(200).json({name:'Ali'})
})


app.post('/login',[
    body('email').isEmail().withMessage('email is invalid'),
    body('password').isLength({min:6}).withMessage('password is invalid')
    // headers('sdsd')
],(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({errors:errors.array()})
    }else{
        res.status(200).json({msg:'success'})
    }



});
// app.post('/login',(req,res)=>{
//     let errors = [];
//     console.log(req.body);
//     if (req.body.password.length < 6) {
//         errors.push({key:'password',msg:'password is too short !'})
//     }

//     if (errors.length > 0) {
//         res.status(400).json({errors})
//     }else{
//         res.status(200).json({msg:'success'})
//     }



// });


// app.delete('/user/:id',(req,res)=>{
//     console.log(req.params)
//     res.status(200).json([])
// });



server.listen(process.env.PORT,()=>{
    console.log('first',process.env.PORT)
})