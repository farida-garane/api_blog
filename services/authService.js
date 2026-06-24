const pool = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Enregistrement
const register = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const result = await pool.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
    [username, email, hashedPassword]
  );
  
  return result.rows[0];
};

// Connexion
const login = async (email, password) => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  
  if (result.rows.length === 0) {
    throw new Error('Email ou mot de passe incorrect');
  }
  
  const user = result.rows[0];
  const passwordMatch = await bcrypt.compare(password, user.password);
  
  if (!passwordMatch) {
    throw new Error('Email ou mot de passe incorrect');
  }
  
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
  
  return { token, user: { id: user.id, username: user.username, email: user.email } };
};

module.exports = { register, login };