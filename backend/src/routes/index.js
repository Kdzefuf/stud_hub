const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const materialsController = require('../controllers/materialsController');
const reviewsController = require('../controllers/reviewsController');
const teachersController = require('../controllers/teachersController');

router.get('/users', userController.getUsers);
router.post('/signup', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.post('/login', userController.getUserByEmail);

router.get('/materials', materialsController.getMaterials);
router.post('/materials', materialsController.createMaterial);
router.get('/popularMaterials', materialsController.getPopularMaterials);
router.get('/materials/:id', materialsController.getMaterialById);
router.get('/searchMaterials', materialsController.searchMaterials);
router.get('/materials', materialsController.getMaterialsByTag);
router.put('/materials/:id', materialsController.updateMaterial);
router.delete('/materials/:id', materialsController.deleteMaterial);

router.get('/reviews', reviewsController.getReviews);
router.post('/reviews', reviewsController.createReview);
router.get('/reviews/:material_id', reviewsController.findReviewsByMaterial);
router.get('/reviews/:id', reviewsController.getReviewById);
router.put('/reviews/:id', reviewsController.updateReview);
router.delete('/reviews/:id', reviewsController.deleteReview);

router.get('/teachers', teachersController.getTeachers);
router.post('/teachers', teachersController.createTeacher);
router.get('/teachers/:id', teachersController.getTeacherById);
router.put('/teachers/:id', teachersController.updateTeacher);
router.delete('/teachers/:id', teachersController.deleteTeacher);

module.exports = router;