const postService = require('../services/postService');

// Créer un article
const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id;

    if (!title || !content) {
      return res.status(400).json({ error: 'Titre et contenu requis' });
    }

    const post = await postService.createPost(userId, title, content);
    res.status(201).json({ message: 'Article créé', post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer tous les articles
const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer un article par ID
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postService.getPostById(id);

    if (!post) {
      return res.status(404).json({ error: 'Article non trouvé' });
    }

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Modifier un article
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const userId = req.user.id;

    if (!title || !content) {
      return res.status(400).json({ error: 'Titre et contenu requis' });
    }

    const post = await postService.updatePost(id, userId, title, content);

    if (!post) {
      return res.status(403).json({ error: 'Non autorisé ou article non trouvé' });
    }

    res.json({ message: 'Article modifié', post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un article
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    await postService.deletePost(id, userId);
    res.json({ message: 'Article supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createPost, getAllPosts, getPostById, updatePost, deletePost };