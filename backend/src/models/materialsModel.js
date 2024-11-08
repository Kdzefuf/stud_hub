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

exports.getPopularMaterials = async (limit, offset) => {
  try {
    const result = await pool.query(
      'SELECT id, name, views_count, rating, file_type FROM materials'
    );

    let sortedMaterials = sortMaterials(result.rows, 'views_count');

    let paginatedMaterials = sortedMaterials.slice(offset, offset + limit);

    return paginatedMaterials;
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

exports.createMaterial = async (materialData) => {
  const { id, name, author_id, link, description, views_count, rating, tags, file_type } = materialData;
  try {
    const result = await pool.query(
      'INSERT INTO materials (id, name, author_id, link, description, views_count, rating, tags, file_type) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [id, name, author_id, link, description, views_count, rating, tags, file_type]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error creating material: ' + err.message);
  }
};

exports.updateMaterial = async (id, materialData) => {
    const { name, author_id, link, description, views_count, rating, tags, file_type } = materialData;
  try {
    const result = await pool.query(
      'UPDATE materials SET name = $2, author_id = $3, link = $4, description = $5, views_count = $6, rating = $7, tags = $8, file_type = $9 WHERE id = $1 RETURNING *',
      [id, name, author_id, link, description, views_count, rating, tags, file_type]
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
