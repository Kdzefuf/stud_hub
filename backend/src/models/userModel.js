const pool = require('../config/db');

exports.getUsers = async () => {
  try {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  } catch (err) {
    throw new Error('Error fetching users: ' + err.message);
  }
};

exports.getUserById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  } catch (err) {
    throw new Error('Error fetching users: ' + err.message);
  }
}

exports.createUser = async (userData) => {
  const { nickname, name, email, password, shedule } = userData;
  try {
    const result = await pool.query(
      'INSERT INTO users (nickname, name, email, password, shedule) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nickname, name, email, password, shedule]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error creating user: ' + err.message);
  }
};

exports.updateUser = async (id, userData) => {
  const { nickname, name, email, password, shedule } = userData;
  try {
    const result = await pool.query(
      'UPDATE users SET nickname = $1, name = $2, email = $3, password = $4, shedule = $5 WHERE id = $6 RETURNING *',
      [nickname, name, email, password, shedule, id]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error('Error updating user: ' + err.message);
  }
};

exports.deleteUser = async (id) => {
  try {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
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