const School = require('../models/school');

exports.createSchool = async(req,res) => {
    try{
        const {name, address, admin} = req.body;
        const school = new School({name, address, admin});
        await school.save();
        res.status(200).json(school);
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

exports.getAllSchools = async(req,res) => {
    try{
        const schools = await School.find();
        res.json(schools);
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

exports.getSchoolById = async(req,res) => {
    try{
        const school = await School.findById(req.params.id);
        if(!school)
            return res.status(404).json({message: 'School not found'});
        res.json(school);
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

exports.updateSchool = async(req, res) => {
    try{
        const {name, address, admin} = req.body;
        const school = await School.findByIdAndUpdate(req.params.id, {name, address, admin}, {new: true});
        if(!school)
            res.status(404).json({message: 'School not found!'})
        res.json(school);
    }catch(err){
        if(err.statuCode == 400){
            res.status(400).json({error: 'Bad request'});
        }else if(err.statusCode == 401){
            res.status(401).json({error: 'Unauthorized request'});
        }else if(err.statusCode == 403){
            res.status(401).json({error: 'Forbidden. User does not have permission to make this request'});
        }else if(err.statusCode == 404){
            res.status(401).json({error: 'School not found!'});
        }else if(err.statusCode == 500){
            res.status(401).json({error: 'Internal Server Error'});
        }else if(err.statusCode == 502){
            res.status(401).json({error: 'Bad Gateway'});
        }else if(err.statusCode == 503){
            res.status(401).json({error: 'Service Unavailable'});
        }
    }
}

exports.deleteSchool = async(req, res) => {
    try{
        const school = await School.findByIdAndDelete(req.params.id);
        if(!school)
            res.status(404).json({message: 'School not found'})
        res.json('School deleted successfully!');
    }catch(err){
        if(err.statuCode == 400){
            res.status(400).json({error: 'Bad request'});
        }else if(err.statusCode == 401){
            res.status(401).json({error: 'Unauthorized request'});
        }else if(err.statusCode == 403){
            res.status(401).json({error: 'Forbidden. User does not have permission to make this request'});
        }else if(err.statusCode == 404){
            res.status(401).json({error: 'School not found'});
        }else if(err.statusCode == 500){
            res.status(401).json({error: 'Internal Server Error'});
        }else if(err.statusCode == 502){
            res.status(401).json({error: 'Bad Gateway'});
        }else if(err.statusCode == 503){
            res.status(401).json({error: 'Service Unavailable'});
        }
    }
}

