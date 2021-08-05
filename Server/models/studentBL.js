var Student = require('./studentScheme')

var getAllStudents = ()=>{
    return new Promise((resolve,reject)=>{
        Student.find({},(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
 }
 
 var getStudentByID = (id)=>{

    return new Promise((resolve,reject)=>{
        Student.findById(id,(err,data)=>{
            if(err){
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
 }
 
 var addStudent = (student) =>{

    return new Promise((resolve,reject)=>{
        var newStudent = new Student({
            id : student.id,
            fullName : student.fullName,
            email : student.email,
            faculty : student.faculty,
            birthDate : student.birthDate,
        })
        newStudent.save((err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(newStudent)
            }
        });
    })
 }

 var updateStudent = (id,student)=>{
    return new Promise((resolve,reject)=>{
        Student.findByIdAndUpdate(id,{

            id : student.id,
            fullName : student.fullName,
            email : student.email,
            faculty : student.faculty,
            birthDate : student.birthDate,
            grades: student.grades
            
           },(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(console.log("student updated"))
            }
        })
    })
 }
 var deleteStudent = (id)=>{
    return new Promise((resolve,reject)=>{
        Student.findByIdAndDelete(id,(err)=>{
            if(err){
                reject(err);
            }
            else {
                resolve("Student has been deleted");
            }
        })
    })
 }
 module.exports = {deleteStudent,updateStudent,addStudent,getStudentByID,getAllStudents}