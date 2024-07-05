const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const { authenticationToken, authorizeRole} = require('../middleware/auth');

router.post('/:classroomId/', authenticationToken, authorizeRole(['SchoolAdmin']), studentController.createStudent);
router.get('/:classroomId/', authenticationToken, authorizeRole(['SchoolAdmin']), studentController.getAllStudents);
router.get('/student/:id', authenticationToken, authorizeRole(['SchoolAdmin']), studentController.getStudentById);
router.put('/:id', authenticationToken, authorizeRole(['SchoolAdmin']), studentController.updateStudent);
router.delete('/:id', authenticationToken, authorizeRole(['SchoolAdmin']), studentController.deleteStudent);

module.exports = router;