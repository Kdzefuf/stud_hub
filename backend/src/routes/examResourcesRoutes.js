const express = require('express');
const router = express.Router();
const examResourcesController = require('../controllers/examResourcesController');
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

router.get('/resources', examResourcesController.getExamResources);
router.post('/resources', upload.single('file'), examResourcesController.createExamResource);
router.get('/resources/:id', examResourcesController.getExamResourceById);
router.get('/searchResources', examResourcesController.searchExamResources);
router.get('/resources', examResourcesController.getExamResourcesByTag);
router.put('/resources/:id', examResourcesController.updateExamResource);
router.delete('/resources/:id', examResourcesController.deleteExamResource);

module.exports = router;