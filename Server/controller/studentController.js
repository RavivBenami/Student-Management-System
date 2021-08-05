var express = require('express')
var studentBL= require('../models/studentBL');
var router = express.Router();

router.route('/').get(async(req,resp)=>{
    var data = await studentBL.getAllStudents();
    return resp.json(data);
})
router.route('/:id').get(async(req,resp)=>{
    var id = req.params.id;
    var student = await studentBL.getStudentByID(id);
    return resp.json(student);
})
router.route('/').post(async(req,resp)=>{
    var newStudent = req.body;
    var result = await studentBL.addStudent(newStudent);
   return resp.json(result)
})
router.route('/:id').put(async(req, resp)=>{
    var id = req.params.id
    var updateStudent = req.body;
    var result = await studentBL.updateStudent(id,updateStudent)
    return resp.json(result)
})
router.route('/:id').delete(async(req,resp)=>{
    var id = req.params.id;
    var result = await studentBL.deleteStudent(id);
    return resp.json("Student deleted")
})

module.exports = router;