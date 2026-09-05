import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ChefHat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRecipes } from './hooks/useRecipes';
import HomePage from './pages/HomePage';
import AddEditRecipePage from './pages/AddEditRecipePage';
import RecipeDetailPage from './pages/RecipeDetailPage';

function AppContent() {
  const {
    recipes,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    toggleFavorite,
  } = useRecipes();

  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <div className="app-header-content">
            <a className="app-header-link" onClick={() => navigate('/')}>
              <ChefHat size={28} className="app-header-icon" />
              <h1 className="app-header-title">Recipe Manager</h1>
            </a>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<HomePage recipes={recipes} />}
            />
            <Route
              path="/add"
              element={
                <AddEditRecipePage
                  recipes={recipes}
                  onAdd={addRecipe}
                  onUpdate={updateRecipe}
                />
              }
            />
            <Route
              path="/edit/:id"
              element={
                <AddEditRecipePage
                  recipes={recipes}
                  onAdd={addRecipe}
                  onUpdate={updateRecipe}
                />
              }
            />
            <Route
              path="/recipe/:id"
              element={
                <RecipeDetailPage
                  recipes={recipes}
                  onDelete={deleteRecipe}
                  onToggleFavorite={toggleFavorite}
                />
              }
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
