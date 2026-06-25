const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authmiddleware');

// POST /api/posts - Créer un article (protégé)
router.post('/', authMiddleware, postController.createPost);

// GET /api/posts - Récupérer tous les articles
router.get('/', postController.getAllPosts);

// GET /api/posts/:id - Récupérer un article par ID
router.get('/:id', postController.getPostById);

// PUT /api/posts/:id - Modifier un article (protégé)
router.put('/:id', authMiddleware, postController.updatePost);

// DELETE /api/posts/:id - Supprimer un article (protégé)
router.delete('/:id', authMiddleware, postController.deletePost);

module.exports = router;