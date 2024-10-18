const pool = require('../config/db');

exports.getMaterials = async () => {
  try {
    const result = await pool.query('SELECT * FROM materials');
    return result.rows;
  } catch (err) {
    throw new Error('Error fetching materials: ' + err.message);
  }
};

exports.getMaterialById = async (id) => {
    try {
      const result = await pool.query('SELECT * FROM materials WHERE id = $1', [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error('Error fetching users: ' + err.message);
    }
  }

exports.createMaterial = async (materialData) => {
  const { id, name, author_id, link, description, views_count, rating, reviews, tags } = materialData;
  try {
    const result = await pool.query(
      'INSERT INTO materials (id, name, author_id, link, description, views_count, rating, reviews, tags) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [id, name, author_id, link, description, views_count, rating, reviews, tags]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error creating material: ' + err.message);
  }
};

exports.updateMaterial = async (id, materialData) => {
    const { name, author_id, link, description, views_count, rating, reviews, tags } = materialData;
  try {
    const result = await pool.query(
      'UPDATE materials SET name = $2, author_id = $3, link = $4, description = $5, views_count = $6, rating = $7, reviews = $8, tags = $9 WHERE id = $1 RETURNING *',
      [id, name, author_id, link, description, views_count, rating, reviews, tags]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error updating material: ' + err.message);
  }
};

exports.deleteMaterial = async (id) => {
  try {
    await pool.query('DELETE FROM materials WHERE id = $1', [id]);
  } catch (err) {
    throw new Error('Error deleting user: ' + err.message);
  }
};

exports.printUsersToConsole = async () => {
    try {
      const users = await this.getUsers();
      console.log('Users from database:', users);
    } catch (err) {
      console.error('Error fetching users:', err.message);
    }
  };