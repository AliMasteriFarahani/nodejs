const Course = require('../models/Course')
exports.GetCourse = function(req,res){
    res.status(200).json({msg:'get course'});
}

exports.PostCourse = (req,res)=>{
    let newCourse = new Course({
        title:'react',
        time:22,
        desc:'react course'
    })
    newCourse.save()
    res.status(200).json({msg:'post course created'})
}

exports.UpdateCourse = (req,res)=>[
    res.status(200).json({msg:'update course'})
]

exports.DeleteCourse = (req,res)=>{
    res.status(200).json({msg:'delete course'})
}