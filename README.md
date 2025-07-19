# Unify User Manage Application

Ce projet est une application de gestion d’utilisateurs construite avec React + Vite, TypeScript, TanStack Query et ag-Grid. Les données viennent de l’API gratuite [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

---

## 🧩 Fonctionnalités

- 🔍 Affichage des utilisateurs avec pagination

- 🧑 Détail utilisateur avec :

  - Infos de base

  - Liste des todos

  - Liste des commentaires

- 🗑 Suppression utilisateur (l'API ne supprime pas réellement)

- 🧭 Navigation entre la liste et la page détail

- 🧠 Gestion de l’état avec TanStack Query

- 🎴 UI simple avec composants réutilisables (`<Card />`)

## 📦 Tech Stack

- [React](https://fr.react.dev/)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com)
- [ag-Grid](https://www.ag-grid.com/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [React Router](https://reactrouter.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)

## 🚀 Démarrage

1. Cloner le dépôt :

```bash
git clone https://github.com/MatheoG/unify-test
```

2. Installer les dépendances :

```bash
cd unify-test
npm install
```

3. Lancer l'application :

```bash
npm run dev
```

Accède ensuite à l'app sur <http://localhost:5173>.

## 📊 Détails Techniques

 L’API [JSONPlaceholder](https://jsonplaceholder.typicode.com/) ne retourne pas 1 million d’utilisateurs, mais dans un vrai projet, il serait necessaire d'utiliser **ag-Grid Enterprise** avec le mode **Server-Side Row Model** ou une autre lib pour les tableaux
 Cela permettrait de gérer efficacement de grandes quantités de données avec des fonctionnalités avancées comme le tri, la pagination et le filtrage côté serveur.
 ag-Grid Enterprise nécessite une licence.

## 📂 Structure du Projet

```plaintext
unify-test/
├── public/               # Fichiers statiques
├── src/                  # Code source de l'application
│   ├── components/       # Composants réutilisables
│   ├── pages/
│   │   ├── MainPage.tsx        # Page principale avec ag-Grid
│   │   └── UserPage.tsx        # Détails utilisateur
│   ├── hooks/          # Hooks personnalisés pour les requêtes API
│   │   ├── useUsers.ts          # Récupération des utilisateurs
│   ├── types/          # Types TypeScript
│   ├── App.tsx         # Composant principal de l'application
│   └── index.tsx       # Point d'entrée de l'application
│   └── App.css        # Styles globaux
├── vite.config.ts       # Configuration de Vite
├── tsconfig.json        # Configuration TypeScript
├── package.json         # Dépendances et scripts
└── README.md            # Documentation du projet
```
