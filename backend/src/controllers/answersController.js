const answersModel = require('../models/answersModel');

exports.getAnswers = async (req, res) => {
  try {
    const answers = await answersModel.getAnswers();
    res.status(200).json(answers);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение ответов:', err);
    res.status(500).send('Ошибка сервера, не удалось получить ответы');
  }
};

exports.findAnswersByQuestion = async (req, res) => {
  const { question_id } = req.params;

  try {
    const answers = await answersModel.findAnswersByQuestion(question_id);
    
    if (!answers) {
      return res.status(404).json({ message: 'answers not found' });
    }

    res.status(200).json(answers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAnswerById = async (req, res) => {
  const { id } = req.body;

  try {
    const answers = await answersModel.getAnswerById(id);
    
    if (!answers) {
      return res.status(404).json({ message: 'answers not found' });
    }

    res.status(200).json(answers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.createAnswer = async (req, res) => {
  try {
    const answers = await answersModel.createAnswer(req.body);
    res.status(200).json(answers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAnswer = async (req, res) => {
  const { id } = req.body;
  try {
    const answers = await answersModel.updateAnswer(id, req.body);
    res.status(200).json(answers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAnswer = async (req, res) => {
  const { id } = req.body;
  try {
    await answersModel.deleteAnswer(id);
    res.status(200).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
