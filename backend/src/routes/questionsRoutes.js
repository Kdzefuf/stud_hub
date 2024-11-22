const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController');

router.get('/questions', questionsController.getQuestions);
router.post('/questions', questionsController.createQuestion);
router.get('/popularQuestions', questionsController.getPopularQuestions);
router.get('/questions/:id', questionsController.getQuestionById);
router.get('/searchQuestions', questionsController.searchQuestions);
router.get('/questions', questionsController.getQuestionsByTag);
router.put('/questions/:id', questionsController.updateQuestion);
router.delete('/questions/:id', questionsController.deleteQuestion);

module.exports = router;