const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');
const {authenticationToken, authorizeRole} = require('../middleware/auth');
const school = require('../models/school');

router.post('/', authenticationToken, authorizeRole(['SuperAdmin']), schoolController.createSchool);
router.get('/', authenticationToken, authorizeRole(['SuperAdmin']), schoolController.getAllSchools);
router.get('/:id', authenticationToken, authorizeRole(['SuperAdmin']), schoolController.getSchoolById);
router.put('/:id', authenticationToken, authorizeRole(['SuperAdmin']), schoolController.updateSchool);
router.delete('/:id', authenticationToken, authorizeRole(['SuperAdmin']), schoolController.deleteSchool);

module.exports = router;