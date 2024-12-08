const pool = require('../config/db');

exports.getQuestions = async (limit, offset) => { 
  try { 
   const result = await pool.query(
    'SELECT * FROM questions ORDER BY id LIMIT $1 OFFSET $2', 
    [limit, offset]
   ); 
   return result.rows; 
  } catch (err) { 
   throw new Error('Error fetching questions: ' + err.message); 
  } 
}; 

exports.getSortedQuestions = async (attribute) => {
  try {
    const result = await pool.query( 
      `SELECT questions.id, questions.title, questions.author_id, questions.views_count, questions.tags, users.name AS author_name 
       FROM questions 
       JOIN users ON questions.author_id = users.id`
    );

    let sortedQuestions = sortQuestions(result.rows, attribute);
    
    return sortedQuestions;
  } catch (err) {
    throw new Error('Error fetching popular questions: ' + err.message);
  }
};  

function sortQuestions(questions, sortAttribute) {
  return questions.sort((a, b) => {
    if (a[sortAttribute] < b[sortAttribute]) {
      return 1;
    }
    if (a[sortAttribute] > b[sortAttribute]) {
      return -1;
    }
    return 0;
  });
}

exports.getQuestionById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM questions WHERE id = $1', [id]);
    return result.rows[0];
  } catch (err) {
    throw new Error('Error fetching questions by id: ' + err.message);
  }
}

exports.searchQuestions = async (title) => {
  try {
   const result = await pool.query(
    'SELECT id, title, author_id, views_count, tags FROM questions WHERE LOWER(title) LIKE LOWER($1)',
    [`%${title}%`]
   );
   return result.rows;
  } catch (err) {
   throw new Error('Error searching questions: ' + err.message);
  }
}; 

exports.getQuestionsByTag = async (tag) => {
  try {
    const result = await pool.query('SELECT * FROM questions WHERE tags @> $1;', [tag]);
    return result.rows;
  } catch (err) {
    throw new Error('Error fetching questions by tag: ' + err.message);
  }
}

exports.createQuestion = async (questionData) => {
  const { id, title, description, tags, author_id } = questionData;
  try {
    const result = await pool.query(
      'INSERT INTO questions (id, title, description, tags, author_id, views_count) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [new Date().getTime(), title, description, '{'+tags+'}', author_id, 0]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error creating question: ' + err.message);
  }
};

exports.updateQuestion = async (id, questionData) => {
    const { title, description, tags, author_id, views_count } = questionData;
  try {
    const result = await pool.query(
      'UPDATE materials SET title = $2, description = $3, author_id = $5, views_count = $6, tags = $4 WHERE id = $1 RETURNING *',
      [id, title, description, tags, author_id, views_count]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error updating question: ' + err.message);
  }
};

exports.deleteQuestion = async (id) => {
  try {
    await pool.query('DELETE FROM questions WHERE id = $1', [id]);
  } catch (err) {
    throw new Error('Error deleting question: ' + err.message);
  }
};
