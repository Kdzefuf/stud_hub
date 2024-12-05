const questionsModel = require('../models/questionsModel');

exports.getQuestions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
    const questions = await questionsModel.getQuestions(limit, offset);
    res.status(200).json(questions);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение вопросов:', err);
    res.status(500).send('Ошибка сервера, не удалось получить вопросов');
  }
};

exports.getQuestionById = async (req, res) => {
  const { id } = req.params;

  try {
    const question = await questionsModel.getQuestionById(id);
    
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.status(200).json(question);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPopularQuestions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    
    const questions = await questionsModel.getPopularQuestions(limit, offset);
    res.status(200).json(questions);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение вопросов:', err);
    res.status(500).send('Ошибка сервера, не удалось получить вопросов');
  }
};

exports.getSortedQuestions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const offset = (page - 1) * limit;

    const attribute = req.query.attribute;
    
    const questions = await questionsModel.getSortedQuestions(limit, offset, attribute);
    res.status(200).json(questions);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение вопросов:', err);
    res.status(500).send('Ошибка сервера, не удалось получить вопросов');
  }
}

exports.searchQuestions = async (req, res) => {
  const { query: title } = req.query;
  
  try {
   const foundQuestions = await questionsModel.searchQuestions(title);
   res.status(200).json(foundQuestions);
  } catch (err) {
   res.status(500).json({ error: err.message });
  }
}

exports.getQuestionsByTag = async (req, res) => {
  const tag = req.query;
  try {
    const questions = await questionsModel.getQuestionsByTag(tag);
    res.status(200).json(questions);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение вопросов:', err);
    res.status(500).send('Ошибка сервера, не удалось получить вопросов');
  }
}

exports.createQuestion = async (req, res) => {
  try {
    const question = await questionsModel.createQuestion(req.body);
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    const question = await questionsModel.updateQuestion(id, req.body);
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    await questionsModel.deleteQuestion(id);
    res.status(200).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};