const pool = require('../config/db');

exports.getMaterials = async (limit, offset) => { 
  try { 
   const result = await pool.query(
    'SELECT * FROM materials ORDER BY id LIMIT $1 OFFSET $2', 
    [limit, offset]
   ); 
   return result.rows; 
  } catch (err) { 
   throw new Error('Error fetching materials: ' + err.message); 
  } 
}; 

exports.getSortedMaterials = async (limit, offset, attribute) => {
  try {
    const result = await pool.query(
      'SELECT id, name, views_count, rating, file_type FROM materials'
    );

    let sortedMaterials = sortMaterials(result.rows, attribute);

    let paginatedMaterials = sortedMaterials.slice(offset, offset + limit);

    return paginatedMaterials;
  } catch (err) {
    throw new Error('Error fetching popular materials: ' + err.message);
  }
};

exports.getPopularMaterials = async () => {
  try {
    const result = await pool.query(
      'SELECT id, name, views_count, rating, file_type FROM materials'
    );

    let sortedMaterials = sortMaterials(result.rows, 'views_count');

    return sortedMaterials;
  } catch (err) {
    throw new Error('Error fetching popular materials: ' + err.message);
  }
};

function sortMaterials(materials, sortAttribute) {
  return materials.sort((a, b) => {
    if (a[sortAttribute] < b[sortAttribute]) {
      return 1;
    }
    if (a[sortAttribute] > b[sortAttribute]) {
      return -1;
    }
    return 0;
  });
}

exports.getMaterialById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM materials WHERE id = $1', [id]);
    return result.rows[0];
  } catch (err) {
    throw new Error('Error fetching materials by id: ' + err.message);
  }
}

exports.searchMaterials = async (name) => {
  try {
    const result = await pool.query(
      'SELECT id, name, views_count, rating, file_type FROM materials WHERE LOWER(name) LIKE LOWER($1)',
      [`%${name}%`]
    );
    return result.rows;
  } catch (err) {
   throw new Error('Error searching materials: ' + err.message);
  }
}; 

exports.getMaterialsByTag = async (tag) => {
  try {
    const result = await pool.query('SELECT * FROM materials WHERE tags @> $1;', [tag]);
    return result.rows;
  } catch (err) {
    throw new Error('Error fetching materials by tag: ' + err.message);
  }
}

exports.createMaterial = async (materialData, file) => {
  const { name, author_id, description, tags, file_type } = materialData;
  try {
    const result = await pool.query(
      'INSERT INTO materials (id, name, author_id, description, views_count, rating, file_type, reviews_count, tags, file) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [new Date().getTime(), name, author_id, description, 0, 0, file_type, 0, '{'+tags+'}', file]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error creating material: ' + err.message);
  }
};

exports.addMaterialFile = async (id, materialData) => {
  const { file } = materialData;
  try {
    await pool.query(
      'UPDATE materials SET file = $2 WHERE id = $1 RETURNING *',
      [id, file]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error adding material file: ' + err.message);
  }
}

exports.updateMaterial = async (id, materialData) => {
    const { name, author_id, description, views_count, rating, tags, file_type, reviews_count, file } = materialData;
  try {
    const result = await pool.query(
      'UPDATE materials SET name = $2, author_id = $3, description = $4, views_count = $5, rating = $6, file_type = $8, reviews_count = $9, tags = $9, file = $10 WHERE id = $1 RETURNING *',
      [id, name, author_id, description, views_count, rating, file_type, reviews_count, tags, file]
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
    throw new Error('Error deleting material: ' + err.message);
  }
};
