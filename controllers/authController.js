const authService = require('../services/authService');

// Inscription
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    const user = await authService.register(username, email, password);
    res.status(201).json({ message: 'Utilisateur créé', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Connexion
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email et mot de passe requis' });
    }

    const { token, user } = await authService.login(email, password);
    res.json({ token, user });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = { register, login };