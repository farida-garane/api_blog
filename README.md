# API Blog

Cette API REST permet de gérer un blog simple avec des utilisateurs, des articles et des commentaires. Elle a été développée avec Node.js, Express et PostgreSQL.

## Fonctionnalités

- Inscription et connexion des utilisateurs
- Création, lecture, modification et suppression d’articles
- Ajout et suppression de commentaires
- Authentification sécurisée avec JWT

## Prérequis

- Node.js
- PostgreSQL
- npm

## Installation

1. Cloner le projet
```bash
git clone <url-du-repo>
cd api_blog
```

2. Installer les dépendances
```bash
npm install
```

3. Configurer les variables d’environnement
Créer un fichier `.env` à la racine du projet avec :

```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=api_blog
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
```

4. Démarrer l’application
```bash
npm start
```

L’API sera disponible sur :
```text
http://localhost:5000
```

## Routes principales

- `POST /api/auth/register` : créer un compte
- `POST /api/auth/login` : se connecter
- `GET /api/posts` : voir les articles
- `POST /api/posts` : créer un article
- `GET /api/comments/:postId` : voir les commentaires d’un article
- `POST /api/comments` : ajouter un commentaire

## Technologies utilisées

- Node.js
- Express
- PostgreSQL
- JWT
- bcryptjs
