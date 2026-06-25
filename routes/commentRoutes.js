const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middleware/authmiddleware');

// POST /api/comments - Créer un commentaire (protégé)
router.post('/', authMiddleware, commentController.createComment);

// GET /api/comments/:postId - Récupérer les commentaires d'un article
router.get('/:postId', commentController.getCommentsByPostId);

// DELETE /api/comments/:id - Supprimer un commentaire (protégé)
router.delete('/:id', authMiddleware, commentController.deleteComment);

module.exports = router;