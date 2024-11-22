const express = require('express');
const router = express.Router();
const teachersController = require('../controllers/teachersController');

router.get('/teachers', teachersController.getTeachers);
router.post('/teachers', teachersController.createTeacher);
router.get('/teachers/:id', teachersController.getTeacherById);
router.put('/teachers/:id', teachersController.updateTeacher);
router.delete('/teachers/:id', teachersController.deleteTeacher);

module.exports = router;