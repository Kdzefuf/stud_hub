const express = require('express');
const router = express.Router();
const materialsController = require('../controllers/materialsController');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});
  
const upload = multer({ storage });

router.get('/materials', materialsController.getMaterials);
router.post('/materials', upload.single('file'), materialsController.createMaterial);
router.get('/popularMaterials', materialsController.getPopularMaterials);
router.get('/materials/:id', materialsController.getMaterialById);
router.get('/searchMaterials', materialsController.searchMaterials);
router.get('/materials', materialsController.getMaterialsByTag);
router.get('/my_materials/:author_id', materialsController.getUserMaterials);
router.put('views/:id', materialsController.addViewsCount);
router.put('/materials/:id', materialsController.updateMaterial);
router.delete('/materials/:id', materialsController.deleteMaterial);

module.exports = router;