exports.GetUser = function(req,res){
    res.status(200).send('user')
}

exports.DeleteUser = function(req,res){
    res.status(200).json({'user_id':req.params.id})
}