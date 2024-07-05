const Classroom = require('../models/classroom');

exports.createClassroom = async(req,res) => {
    try{
        const {name} = req.body;
        const schoolId = req.params.schoolId;
        const classroom = new Classroom({name, school: schoolId});
        await classroom.save();
        res.status(200).json(classroom);
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

exports.getAllClassrooms = async(req,res) => {
    try{
        const { schoolId} = req.params;
        const classrooms = await Classroom.find({school: schoolId});
        res.json(classrooms)
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

exports.getClassroomById = async(req,res) => {
    try{
        const classroom = await Classroom.findById(req.params.id);
        if(!classroom)
            return res.status(404).json({message: 'Classroom not found! Try again'});
        res.status(200).json(classroom);
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

exports.updateClassroom = async(req,res) => {
    try{
        const { name } = req.body;
        const classroom = await Classroom.findByIdAndUpdate(req.params.id, {name}, {new: true});
        if(!classroom)
            return res.status(400).json({message: 'Classroom not found! Try again'})
        return res.status(200).json(classroom);
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

exports.deleteClassroom = async(req,res) => {
    try{
        const classroom = await Classroom.findByIdAndDelete(req.params.id)
        if(!classroom)
            return res.status(400).json({message: 'Something went wrong! Please try again'});
        return res.status(200).json({message: 'Classroom deleted successfully!'})
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

