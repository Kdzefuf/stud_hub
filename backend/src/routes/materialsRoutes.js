const express = require('express');
const router = express.Router();
const materialsController = require('../controllers/materialsController');

router.get('/materials', materialsController.getMaterials);
router.post('/materials', materialsController.createMaterial);
router.get('/popularMaterials', materialsController.getPopularMaterials);
router.get('/materials/:id', materialsController.getMaterialById);
router.get('/searchMaterials', materialsController.searchMaterials);
router.get('/materials', materialsController.getMaterialsByTag);
router.put('/materials/:id', materialsController.updateMaterial);
router.delete('/materials/:id', materialsController.deleteMaterial);

module.exports = router;