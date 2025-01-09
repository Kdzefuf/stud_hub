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

exports.getSortedQuestions = async (req, res) => {
  try {
    const attribute = req.query.by;
    
    const questions = await questionsModel.getSortedQuestions(attribute);
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

exports.getUserQuestions = async (req, res) => {
  const { author_id } = req.params;
  try {
    const questions = await questionsModel.getUserQuestions(author_id);
    res.status(200).json(questions);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение вопросов пользователя:', err);
    res.status(500).send('Ошибка сервера, не удалось получить вопросы');
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

exports.addViewsCount = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedQuestion = await questionsModel.addViewsCount(id);
    res.status(200).json(updatedQuestion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.deleteQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    await questionsModel.deleteQuestion(id);
    res.status(200).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};