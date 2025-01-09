const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questionsController');

router.get('/questions', questionsController.getQuestions);
router.post('/questions', questionsController.createQuestion);
router.get('/questions/:id', questionsController.getQuestionById);
router.get('/searchQuestions', questionsController.searchQuestions);
router.get('/sortedQuestions', questionsController.getSortedQuestions);
router.get('/questions', questionsController.getQuestionsByTag);
router.get('/my_questions', questionsController.getUserQuestions);
router.put('/views/:id', questionsController.addViewsCount);
router.put('/questions/:id', questionsController.updateQuestion);
router.delete('/questions/:id', questionsController.deleteQuestion);

module.exports = router;