const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.register = async(req,res) => {
    try{ 
        const {username, password, role} = req.body;
        const user = new User({username, password, role});
        await user.save();
        res.status(200).json({message: 'User registered successfully!'});
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
};

exports.login = async(req,res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const pass = await user.comparePassword(password);
        if(!user || !(await user.comparePassword(password))){
            return res.status(401).json({message: 'Invalid credentials! Try again.'});
        }
        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({token});
    }catch(err){
        if(err.statuCode == 400){
            res.status(400).json({error: 'Bad request'});
        }else if(err.statusCode == 401){
            res.status(401).json({error: 'Invalid credentials! Try again.'});
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
};