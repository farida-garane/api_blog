const pool = require('../config/database');

// Créer un article
const createPost = async (userId, title, content) => {
  const result = await pool.query(
    'INSERT INTO posts (user_id, title, content) VALUES ($1, $2, $3) RETURNING *',
    [userId, title, content]
  );
  return result.rows[0];
};

// Récupérer tous les articles
const getAllPosts = async () => {
  const result = await pool.query(
    'SELECT p.*, u.username FROM posts p JOIN users u ON p.user_id = u.id ORDER BY p.created_at DESC'
  );
  return result.rows;
};

// Récupérer un article par ID
const getPostById = async (postId) => {
  const result = await pool.query(
    'SELECT p.*, u.username FROM posts p JOIN users u ON p.user_id = u.id WHERE p.id = $1',
    [postId]
  );
  return result.rows[0];
};

// Modifier un article
const updatePost = async (postId, userId, title, content) => {
  const result = await pool.query(
    'UPDATE posts SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 AND user_id = $4 RETURNING *',
    [title, content, postId, userId]
  );
  return result.rows[0];
};

// Supprimer un article
const deletePost = async (postId, userId) => {
  await pool.query('DELETE FROM posts WHERE id = $1 AND user_id = $2', [postId, userId]);
};

module.exports = { createPost, getAllPosts, getPostById, updatePost, deletePost };