const express = require('express')

let router = express.Router();

let UserController = require('../controllers/UserController')

router.use((req,res,next)=>{
    if (req.headers['token'] == 'token') {
        next();
    }else{
        res.status(401).json({'msg':'not auth'})
    }
})

router.get('/',UserController.GetUser);

router.delete('/user-id/:id',UserController.DeleteUser)

module.exports = router;

// router middleware
// router.use((req,res,next)=>{
//     if (req.headers['token'] == 'token') {
//         next();
//     }else{
//         res.status(401).json({'msg':'not auth'})
//     }
// })

// router.get('/',(req,res)=>{
//     res.status(200).send('user')
// });

// router.delete('/user-id/:id',(req,res)=>{
//     res.status(200).json({'user_id':req.params.id})
// })

