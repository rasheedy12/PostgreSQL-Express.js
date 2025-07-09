const pool = require('../db');

exports.getAllUsers = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: `User with ID ${id} not found.` });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const result = await pool.query(
      'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
      [name, email, age]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
      [name, email, age, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: `User with ID ${id} not found.` });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: `User with ID ${id} not found.` });
    }
    res.json({ message: `User with ID ${id} deleted successfully.` });
  } catch (err) {
    next(err);
  }
};
