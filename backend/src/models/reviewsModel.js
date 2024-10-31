const pool = require('../config/db');

exports.getReviews = async () => {
  try {
    const result = await pool.query('SELECT * FROM reviews');
    return result.rows;
  } catch (err) {
    throw new Error('Error fetching reviews: ' + err.message);
  }
};

exports.getReviewById = async (id) => {
    try {
      const result = await pool.query('SELECT * FROM reviews WHERE id = $1', [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error('Error fetching review by id: ' + err.message);
    }
}

exports.findReviewsByMaterial = async (material_id) => {
    try {
      const result = await pool.query('SELECT * FROM reviews WHERE material_id = $1', [material_id]);
      return result.rows[0];
    } catch (err) {
      throw new Error('Error fetching review by material id: ' + err.message);
    }
}

exports.createReview = async (reviewData) => {
  const { id, material_id, comment, rating, author_id, tags } = reviewData;
  try {
    const result = await pool.query(
      'INSERT INTO reviews (id, material_id, comment, rating, author_id, tags) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [id, material_id, comment, rating, author_id, tags]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error creating review: ' + err.message);
  }
};

exports.updateReview = async (id, reviewData) => {
    const { material_id, comment, rating, author_id, tags } = reviewData;
  try {
    const result = await pool.query(
      'UPDATE reviews SET material_id = $2, comment = $3, rating = $4, author_id = $5, tags = $6 WHERE id = $1 RETURNING *',
      [id, material_id, comment, rating, author_id, tags]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error updating review: ' + err.message);
  }
};

exports.deleteReview = async (id) => {
  try {
    await pool.query('DELETE FROM reviews WHERE id = $1', [id]);
  } catch (err) {
    throw new Error('Error deleting review: ' + err.message);
  }
};
