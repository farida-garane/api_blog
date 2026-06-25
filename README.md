# 📝 API Blog REST

Une API REST développée avec **Node.js**, **Express.js** et **PostgreSQL** permettant de gérer un blog de manière sécurisée. L'application offre un système complet d'authentification des utilisateurs, la gestion des articles ainsi que des commentaires via des endpoints REST.

---

## ✨ Fonctionnalités

### 🔐 Authentification

* Inscription d'un nouvel utilisateur
* Connexion avec email et mot de passe
* Authentification sécurisée avec JWT
* Hachage des mots de passe avec bcryptjs

### 📝 Gestion des articles

* Création d'articles
* Consultation de tous les articles
* Consultation d'un article par son identifiant
* Modification d'un article
* Suppression d'un article

### 💬 Gestion des commentaires

* Ajouter un commentaire à un article
* Consulter les commentaires d'un article
* Supprimer un commentaire

### ✅ Autres fonctionnalités

* Validation des données reçues
* Gestion centralisée des erreurs
* Stockage des données dans PostgreSQL

---

## 🛠️ Technologies utilisées

* **Node.js**
* **Express.js**
* **PostgreSQL**
* **JWT (jsonwebtoken)**
* **bcryptjs**

---

## 📋 Prérequis

Avant d'exécuter le projet, assure-toi d'avoir installé :

* Node.js
* npm
* PostgreSQL

---

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/farida-garane/api_blog.git
cd api_blog
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Créer la base de données

```sql
CREATE DATABASE api_blog;
```

### 4. Initialiser les tables

```bash
psql -U postgres -d api_blog -f database/init.sql
```

### 5. Lancer l'application

```bash
npm start
```

En mode développement :

```bash
npm run dev
```

---

## 📌 Endpoints de l'API

### Authentification

| Méthode | Endpoint             | Description                 |
| ------- | -------------------- | --------------------------- |
| POST    | `/api/auth/register` | Créer un compte utilisateur |
| POST    | `/api/auth/login`    | Se connecter                |

### Articles

| Méthode | Endpoint         | Description                 |
| ------- | ---------------- | --------------------------- |
| GET     | `/api/posts`     | Récupérer tous les articles |
| GET     | `/api/posts/:id` | Récupérer un article        |
| POST    | `/api/posts`     | Créer un article            |
| PUT     | `/api/posts/:id` | Modifier un article         |
| DELETE  | `/api/posts/:id` | Supprimer un article        |

### Commentaires

| Méthode | Endpoint                | Description                             |
| ------- | ----------------------- | --------------------------------------- |
| GET     | `/api/comments/:postId` | Consulter les commentaires d'un article |
| POST    | `/api/comments`         | Ajouter un commentaire                  |
| DELETE  | `/api/comments/:id`     | Supprimer un commentaire                |

---

## 🔒 Sécurité

L'API met en œuvre plusieurs mécanismes de sécurité :

* Authentification par JWT
* Hachage des mots de passe avec bcryptjs
* Protection des routes nécessitant une authentification
* Validation des données utilisateur
* Gestion des erreurs pour assurer la robustesse de l'application

---

## 👤 Auteur

**GARANE Farida Anne Kevine**

GitHub : https://github.com/farida-garane
