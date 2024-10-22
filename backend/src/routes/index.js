const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const materialsController = require('../controllers/materialsController');

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.get('/materials', materialsController.getMaterials);
router.post('/materials', materialsController.createMaterial);
router.get('/popularMaterials', materialsController.getPopularMaterials);
router.get('/materials/:id', materialsController.getMaterialById);
router.put('/materials/:id', materialsController.updateMaterial);
router.delete('/materials/:id', materialsController.deleteMaterial);

module.exports = router;