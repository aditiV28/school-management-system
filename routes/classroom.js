const express = require('express');
const router = express.Router();
const classroomController = require('../controllers/classroomController');
const {authenticationToken, authorizeRole} = require('../middleware/auth');

router.post('/:schoolId/', authenticationToken, authorizeRole(['SchoolAdmin']), classroomController.createClassroom);
router.get('/:schoolId/', authenticationToken, authorizeRole(['SchoolAdmin']), classroomController.getAllClassrooms);
router.get('/:id', authenticationToken, authorizeRole(['SchoolAdmin']), classroomController.getClassroomById);
router.put('/:id', authenticationToken, authorizeRole(['SchoolAdmin']), classroomController.updateClassroom);
router.delete('/:id', authenticationToken, authorizeRole(['SchoolAdmin']), classroomController.deleteClassroom);

module.exports = router;