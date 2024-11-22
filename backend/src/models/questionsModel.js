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

exports.getSortedQuestions = async (limit, offset, attribute) => {
  try {
    const result = await pool.query(
      'SELECT id, title, tags, author_id, views_count FROM questions'
    );

    let sortedQuestions = sortQuestions(result.rows, attribute);

    let paginatedQuestions = sortedQuestions.slice(offset, offset + limit);

    return paginatedQuestions;
  } catch (err) {
    throw new Error('Error fetching popular questions: ' + err.message);
  }
};

exports.getPopularQuestions = async (limit, offset) => {
  try {
    const result = await pool.query(
      'SELECT id, title, tags, author_id, views_count FROM questions'
    );

    let sortedQuestions = sortQuestions(result.rows, 'views_count');

    let paginatedQuestions = sortedQuestions.slice(offset, offset + limit);

    return paginatedQuestions;
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
    'SELECT id, title, tags, author_id, views_count FROM questions WHERE LOWER(title) LIKE LOWER($1)',
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
  const { id, title, description, tags, author_id, views_count } = questionData;
  try {
    const result = await pool.query(
      'INSERT INTO questions (id, title, description, tags, author_id, views_count) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [id, title, description, tags, author_id, views_count]
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
      'UPDATE materials SET title = $2, description = $3, tags = $4, author_id = $5, views_count = $6 WHERE id = $1 RETURNING *',
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
