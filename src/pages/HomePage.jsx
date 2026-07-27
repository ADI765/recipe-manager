import { useState, useMemo } from 'react';
import { Plus, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import RecipeList from '../components/RecipeList';
import EmptyState from '../components/EmptyState';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

function HomePage({ recipes }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const categories = useMemo(() => {
    const unique = [...new Set(recipes.map((r) => r.category).filter(Boolean))];
    return unique.sort();
  }, [recipes]);

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch = recipe.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase().trim());
      const matchesCategory =
        selectedCategory === '' || recipe.category === selectedCategory;
      const matchesFavorite = !showFavoritesOnly || recipe.favorite;
      return matchesSearch && matchesCategory && matchesFavorite;
    });
  }, [recipes, searchQuery, selectedCategory, showFavoritesOnly]);

  const hasRecipes = recipes.length > 0;
  const hasResults = filteredRecipes.length > 0;
  const isFiltering = searchQuery || selectedCategory || showFavoritesOnly;

  return (
    <div className="home-page">
      <div className="home-page-header">
        <h2 className="home-page-title">
          My Recipes
          {hasRecipes && (
            <span className="home-page-count">{recipes.length}</span>
          )}
        </h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate('/add')}
        >
          <Plus size={18} />
          Add Recipe
        </button>
      </div>

      {hasRecipes && (
        <div className="home-page-filters">
          <div className="home-page-search-row">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <button
              className={`favorite-toggle-btn ${showFavoritesOnly ? 'favorite-toggle-btn-active' : ''}`}
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              aria-label="Toggle favorites only"
            >
              <Heart
                size={18}
                fill={showFavoritesOnly ? 'currentColor' : 'none'}
              />
              Favorites
            </button>
          </div>
          {categories.length > 1 && (
            <CategoryFilter
              categories={categories}
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />
          )}
        </div>
      )}

      {!hasRecipes ? (
        <EmptyState />
      ) : !hasResults && isFiltering ? (
        <div className="home-page-no-results">
          <p>No recipes match your search.</p>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('');
              setShowFavoritesOnly(false);
            }}
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <RecipeList recipes={filteredRecipes} />
      )}
    </div>
  );
}

export default HomePage;
