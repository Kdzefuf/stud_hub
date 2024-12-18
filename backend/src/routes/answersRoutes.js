const express = require('express');
const router = express.Router();
const answersController = require('../controllers/answersController');

router.get('/answers', answersController.getAnswers);
router.post('/answers', answersController.createAnswer);
router.get('/answers/:question_id', answersController.findAnswersByQuestion);
router.get('/answers/:id', answersController.getAnswerById);
router.put('/answers/:id', answersController.updateAnswer);
router.delete('/answers/:id', answersController.deleteAnswer);

module.exports = router;