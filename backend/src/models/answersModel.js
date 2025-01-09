const pool = require('../config/db');

exports.getAnswers = async () => {
  try {
    const result = await pool.query('SELECT * FROM answers');
    return result.rows;
  } catch (err) {
    throw new Error('Error fetching answers: ' + err.message);
  }
};

exports.getAnswerById = async (id) => {
    try {
      const result = await pool.query('SELECT * FROM answers WHERE id = $1', [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error('Error fetching answer by id: ' + err.message);
    }
}

exports.findAnswersByQuestion = async (question_id) => {
    try {
      const result = await pool.query('SELECT * FROM answers WHERE question_id = $1', [question_id]);
      return result.rows;
    } catch (err) {
      throw new Error('Error fetching answers by question id: ' + err.message);
    }
}

exports.createAnswer = async (answerData, file) => {
  const { question_id, description, author_id } = answerData;
  try {
    const result = await pool.query(
      'INSERT INTO answers (id, question_id, description, author_id, file) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [new Date().getTime(), question_id, description, author_id, file]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error creating answer: ' + err.message);
  }
};

exports.addAnswerFile = async (id, answerData) => {
  const { file } = answerData;
  try {
    await pool.query(
      'UPDATE answers SET file = $2 WHERE id = $1 RETURNING *',
      [id, file]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error adding answer file: ' + err.message);
  }
}

exports.updateAnswer = async (id, answerData) => {
    const { question_id, description, author_id } = answerData;
  try {
    const result = await pool.query(
      'UPDATE answers SET question_id = $2, description = $3, author_id = $4 WHERE id = $1 RETURNING *',
      [id, question_id, description, author_id]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error updating answer: ' + err.message);
  }
};

exports.deleteAnswer = async (id) => {
  try {
    await pool.query('DELETE FROM answers WHERE id = $1', [id]);
  } catch (err) {
    throw new Error('Error deleting answer: ' + err.message);
  }
};
