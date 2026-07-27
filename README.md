# Recipe Manager

A beautiful, responsive, and fully functional recipe management application built with React. Save, organize, and explore your favorite recipes without the need for a backend — all data is securely stored locally in your browser!

## 🚀 Features

- **Full CRUD Operations**: Create, Read, Update, and Delete your recipes effortlessly.
- **Rich Recipe Detail**: View recipes with hero images, categorized tags, dynamic ingredients, and step-by-step instructions.
- **Smart Search & Filters**: Live search across recipe titles and dynamically generated category filters.
- **Favorites System**: Mark recipes as favorites and quickly toggle to view only your most loved meals.
- **Responsive Design**: Flawless experience across mobile, tablet, and desktop devices using CSS Grid and Flexbox.
- **Local Persistence**: No accounts or databases needed! Your data is instantly saved to `localStorage`.
- **Form Validation**: Comprehensive form validation ensures you never save an incomplete recipe.

## 🛠️ Technologies Used

- **React 19** (Functional Components, Hooks)
- **Vite** (Next Generation Frontend Tooling)
- **React Router v7** (Declarative Routing)
- **Lucide React** (Beautiful SVG icons)
- **Vanilla CSS** (Custom CSS properties, modern design system, no external frameworks)

## 📁 Folder Structure

```text
src/
├── components/       # Reusable UI components (RecipeCard, SearchBar, etc.)
├── hooks/            # Custom React hooks (useRecipes, useLocalStorage)
├── pages/            # Page-level components (HomePage, AddEditRecipePage, etc.)
├── styles/           # Global styles and design system tokens (CSS variables)
├── utils/            # Helper functions (idGenerator, storage)
├── App.jsx           # Main application routing
└── main.jsx          # React entry point
```

## ⚙️ Installation Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ADI765/recipe-manager.git
   cd recipe-manager
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 📖 Usage

- **Add a Recipe**: Click the "Add Recipe" button on the home page. Fill in the required fields (Title, Category, Ingredients, Steps) and click save.
- **Edit/Delete**: Click on any recipe card to view its details. Use the Edit or Delete buttons in the top right corner.
- **Search & Filter**: Use the search bar to find recipes by name, or click the category pills to filter. Use the heart icon to toggle "Favorites Only" mode.

## 📸 Screenshots

*(Replace these placeholders with actual screenshots of your application)*

- **Home Page (Grid View):** `![Home Page](./screenshots/home.png)`
- **Recipe Detail View:** `![Recipe Detail](./screenshots/detail.png)`
- **Add/Edit Form:** `![Recipe Form](./screenshots/form.png)`
- **Search & Filter active:** `![Search & Filter](./screenshots/filter.png)`

## 🔮 Future Improvements

- Add export/import functionality to share recipe collections.
- Implement an external database (e.g., Firebase, Supabase) for cloud syncing across devices.
- Add user authentication for multi-user support.
- Allow image uploads instead of just image URLs.
- Print-friendly layout for recipe details.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
