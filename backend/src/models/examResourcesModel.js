const pool = require('../config/db');

exports.getExamResources = async () => { 
  try { 
   const result = await pool.query(
    'SELECT * FROM exam_resources ORDER BY id'
   ); 
   return result.rows; 
  } catch (err) { 
   throw new Error('Error fetching exam resources: ' + err.message); 
  } 
}; 

exports.getSortedExamResources = async (attribute) => {
  try {
    const result = await pool.query(
      'SELECT * FROM exam_resources'
    );

    let sortedExamResources = sortExamResources(result.rows, attribute);

    return sortedExamResources;
  } catch (err) {
    throw new Error('Error fetching popular exam resources: ' + err.message);
  }
};

function sortExamResources(examResources, sortAttribute) {
  return examResources.sort((a, b) => {
    if (a[sortAttribute] < b[sortAttribute]) {
      return 1;
    }
    if (a[sortAttribute] > b[sortAttribute]) {
      return -1;
    }
    return 0;
  });
}

exports.getExamResourceById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM exam_resources WHERE id = $1', [id]);
    return result.rows[0];
  } catch (err) {
    throw new Error('Error fetching exam resources by id: ' + err.message);
  }
}

exports.searchExamResources = async (name) => {
  try {
    const result = await pool.query(
      'SELECT * FROM exam_resources WHERE LOWER(name) LIKE LOWER($1)',
      [`%${name}%`]
    );
    return result.rows;
  } catch (err) {
   throw new Error('Error searching exam_resources: ' + err.message);
  }
}; 

exports.getExamResourcesByTag = async (tag) => {
  try {
    const result = await pool.query('SELECT * FROM exam_resources WHERE tags @> $1;', [tag]);
    return result.rows;
  } catch (err) {
    throw new Error('Error fetching exam resources by tag: ' + err.message);
  }
}

exports.createExamResource = async (examResourceData, file) => {
  const { name, tags, file_type } = examResourceData;
  try {
    const result = await pool.query(
      'INSERT INTO exam_resources (id, views_count, file, tags, name, file_type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [new Date().getTime(), 0, file, '{'+tags+'}', name, file_type]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error creating exam resource: ' + err.message);
  }
};

exports.addExamResourceFile = async (id, examResourceData) => {
  const { file } = examResourceData;
  try {
    await pool.query(
      'UPDATE exam_resources SET file = $2 WHERE id = $1 RETURNING *',
      [id, file]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error adding exam resource file: ' + err.message);
  }
}

exports.updateExamResource = async (id, examResourceData) => {
    const { name, views_count, file, rating, tags, file_type } = examResourceData;
  try {
    const result = await pool.query(
      'UPDATE materials SET views_count = $2, file = $3, rating = $4, tags = $5, name = $6, file_type = $7 WHERE id = $1 RETURNING *',
      [id, views_count, file, rating, tags, name, file_type]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error updating exam resource: ' + err.message);
  }
};

exports.deleteExamResource = async (id) => {
  try {
    await pool.query('DELETE FROM exam_resources WHERE id = $1', [id]);
  } catch (err) {
    throw new Error('Error deleting exam resource: ' + err.message);
  }
};
