const pool = require('../config/db');

exports.getTeachers = async () => {
  try {
    const result = await pool.query('SELECT * FROM teachers_reviews');
    return result.rows;
  } catch (err) {
    throw new Error('Error fetching teachers: ' + err.message);
  }
};

exports.getTeacherById = async (id) => {
    try {
      const result = await pool.query('SELECT * FROM teachers_reviews WHERE id = $1', [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error('Error fetching teacher by id: ' + err.message);
    }
}

exports.createTeacher = async (teacherData) => {
  const { id, name, subjects, photo, biography, shedule, reviews } = teacherData;
  try {
    const result = await pool.query(
      'INSERT INTO teachers_reviews (id, name, subjects, photo, biography, shedule, reviews) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [id, name, subjects, photo, biography, shedule, reviews]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error creating teacher: ' + err.message);
  }
};

exports.updateReview = async (id, teacherData) => {
    const { name, subjects, photo, biography, shedule, reviews } = teacherData;
  try {
    const result = await pool.query(
      'UPDATE teachers_reviews SET name = $2, subjects = $3, photo = $4, biography = $5, shedule = $6, reviews = $7 WHERE id = $1 RETURNING *',
      [id, name, subjects, photo, biography, shedule, reviews]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error updating teacher: ' + err.message);
  }
};

exports.deleteTeacher = async (id) => {
  try {

    await pool.query('DELETE FROM teachers_reviews WHERE id = $1', [id]);
  } catch (err) {
    throw new Error('Error deleting teacher: ' + err.message);
  }
};
