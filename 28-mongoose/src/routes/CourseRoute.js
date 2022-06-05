const express = require('express')
const router = express.Router();
const CourseController = require('../controllers/CourseController')

router.get('/',CourseController.GetCourse)
router.post('/',CourseController.PostCourse)
router.put('/:id',CourseController.UpdateCourse)
router.delete('/:id',CourseController.DeleteCourse)

module.exports = router