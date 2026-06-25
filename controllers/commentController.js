const commentService = require('../services/commentService');

// Créer un commentaire
const createComment = async (req, res) => {
  try {
    const { postId, content } = req.body;
    const userId = req.user.id;

    if (!postId || !content) {
      return res.status(400).json({ error: 'PostID et contenu requis' });
    }

    const comment = await commentService.createComment(postId, userId, content);
    res.status(201).json({ message: 'Commentaire créé', comment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer les commentaires d'un article
const getCommentsByPostId = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await commentService.getCommentsByPostId(postId);
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un commentaire
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    await commentService.deleteComment(id, userId);
    res.json({ message: 'Commentaire supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createComment, getCommentsByPostId, deleteComment };