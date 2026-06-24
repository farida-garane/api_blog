const pool = require('../config/database');

// Créer un commentaire
const createComment = async (postId, userId, content) => {
  const result = await pool.query(
    'INSERT INTO comments (post_id, user_id, content) VALUES ($1, $2, $3) RETURNING *',
    [postId, userId, content]
  );
  return result.rows[0];
};

// Récupérer les commentaires d'un article
const getCommentsByPostId = async (postId) => {
  const result = await pool.query(
    'SELECT c.*, u.username FROM comments c JOIN users u ON c.user_id = u.id WHERE c.post_id = $1 ORDER BY c.created_at DESC',
    [postId]
  );
  return result.rows;
};

// Supprimer un commentaire
const deleteComment = async (commentId, userId) => {
  await pool.query('DELETE FROM comments WHERE id = $1 AND user_id = $2', [commentId, userId]);
};

module.exports = { createComment, getCommentsByPostId, deleteComment };