const express = require('express');
const router = express.Router();
const answersController = require('../controllers/answersController');
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

router.get('/answers', answersController.getAnswers);
router.post('/answers', upload.single('file'), answersController.createAnswer);
router.get('/answers/:question_id', answersController.findAnswersByQuestion);
router.get('/answer/:id', answersController.getAnswerById);
router.put('/answers/:id', answersController.updateAnswer);
router.delete('/answers/:id', answersController.deleteAnswer);

module.exports = router;