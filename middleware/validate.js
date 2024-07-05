const { body, result } = require('express-validator');

exports.validate = (method) => {
    switch(method){
        case 'register': {
            return [
                body('username', 'Username is required').exists(),
                body('password', 'Password is required').exists(),
                body('role', 'Role is required').exists().isIn(['SuperAdmin', 'SchoolAdmin'])
            ]
        }

        case 'login': {
            return [
                body('username', 'Username is required').exists(),
                body('password', 'Password is required').exists()
            ]
        }
    }
}

exports.handleValidation = (req,res,next) => {
    const errors= result(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    next();
}