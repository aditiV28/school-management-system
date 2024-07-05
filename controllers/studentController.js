const Student = require('../models/student');

exports.createStudent = async(req,res) => {
    try{
        const {name,age} = req.body;
        const { classroomId } = req.params;
        const student = new Student({name, age, classroom: classroomId});
        await student.save();
        res.status(200).json(student);
    }catch(err){
        if(err.statuCode == 400){
            res.status(400).json({error: 'Bad request'});
        }else if(err.statusCode == 401){
            res.status(401).json({error: 'Unauthorized request'});
        }else if(err.statusCode == 403){
            res.status(401).json({error: 'Forbidden. User does not have permission to make this request'});
        }else if(err.statusCode == 404){
            res.status(401).json({error: 'Not found!'});
        }else if(err.statusCode == 500){
            res.status(401).json({error: 'Internal Server Error'});
        }else if(err.statusCode == 502){
            res.status(401).json({error: 'Bad Gateway'});
        }else if(err.statusCode == 503){
            res.status(401).json({error: 'Service Unavailable'});
        }
    }
}

exports.getAllStudents = async(req,res) => {
    try{
        const { classroomId} = req.params;
        const students = await Student.find({classroom: classroomId});
        res.json(students);
    }catch(err){
        if(err.statuCode == 400){
            res.status(400).json({error: 'Bad request'});
        }else if(err.statusCode == 401){
            res.status(401).json({error: 'Unauthorized request'});
        }else if(err.statusCode == 403){
            res.status(401).json({error: 'Forbidden. User does not have permission to make this request'});
        }else if(err.statusCode == 404){
            res.status(401).json({error: 'Not found!'});
        }else if(err.statusCode == 500){
            res.status(401).json({error: 'Internal Server Error'});
        }else if(err.statusCode == 502){
            res.status(401).json({error: 'Bad Gateway'});
        }else if(err.statusCode == 503){
            res.status(401).json({error: 'Service Unavailable'});
        }
    }
}

exports.getStudentById = async(req,res) => {console.log('!!!!!!!!')
    try{    
        const student = await Student.findById(req.params.id);
        console.log('---', req.params.id)
        console.log('====', student)
        if(!student)
            res.status(400).json({message: 'Student not found! Try again.'})
        res.status(200).json(student);
    }catch(err){
        if(err.statuCode == 400){
            res.status(400).json({error: 'Bad request'});
        }else if(err.statusCode == 401){
            res.status(401).json({error: 'Unauthorized request'});
        }else if(err.statusCode == 403){
            res.status(401).json({error: 'Forbidden. User does not have permission to make this request'});
        }else if(err.statusCode == 404){
            res.status(401).json({error: 'Not found!'});
        }else if(err.statusCode == 500){
            res.status(401).json({error: 'Internal Server Error'});
        }else if(err.statusCode == 502){
            res.status(401).json({error: 'Bad Gateway'});
        }else if(err.statusCode == 503){
            res.status(401).json({error: 'Service Unavailable'});
        }
    }
}

exports.updateStudent = async(req,res) => {
    try{    
        const {name,age} = req.body;
        const student = await Student.findByIdAndUpdate(req.params.id, {name, age}, {new: true});
        if(!student)
            res.status(400).json({message: 'Student not found! Try again'})
        res.status(200).json(student);
    }catch(err){
        if(err.statuCode == 400){
            res.status(400).json({error: 'Bad request'});
        }else if(err.statusCode == 401){
            res.status(401).json({error: 'Unauthorized request'});
        }else if(err.statusCode == 403){
            res.status(401).json({error: 'Forbidden. User does not have permission to make this request'});
        }else if(err.statusCode == 404){
            res.status(401).json({error: 'Not found!'});
        }else if(err.statusCode == 500){
            res.status(401).json({error: 'Internal Server Error'});
        }else if(err.statusCode == 502){
            res.status(401).json({error: 'Bad Gateway'});
        }else if(err.statusCode == 503){
            res.status(401).json({error: 'Service Unavailable'});
        }
    }
}

exports.deleteStudent = async(req, res) => {
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        if(!student)
            res.status(400).json({message: 'Sonething went wrong! Please try again.'})
        res.status(200).json({message: 'Student deleted successfully'});
    }catch(err){
        if(err.statuCode == 400){
            res.status(400).json({error: 'Bad request'});
        }else if(err.statusCode == 401){
            res.status(401).json({error: 'Unauthorized request'});
        }else if(err.statusCode == 403){
            res.status(401).json({error: 'Forbidden. User does not have permission to make this request'});
        }else if(err.statusCode == 404){
            res.status(401).json({error: 'Not found!'});
        }else if(err.statusCode == 500){
            res.status(401).json({error: 'Internal Server Error'});
        }else if(err.statusCode == 502){
            res.status(401).json({error: 'Bad Gateway'});
        }else if(err.statusCode == 503){
            res.status(401).json({error: 'Service Unavailable'});
        }
    }
}