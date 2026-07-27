import { Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRecipes } from '../hooks/useRecipes';
import FavoriteButton from './FavoriteButton';

function RecipeCard({ recipe }) {
  const { toggleFavorite } = useRecipes();

  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card">
      <div className="recipe-card-image">
        {recipe.image ? (
          <img src={recipe.image} alt={recipe.title} />
        ) : (
          <div className="recipe-card-placeholder">
            <span className="recipe-card-placeholder-emoji">🍽️</span>
          </div>
        )}
        <FavoriteButton
          className="recipe-card-favorite"
          isFavorite={recipe.favorite}
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(recipe.id);
          }}
        />
      </div>

      <div className="recipe-card-body">
        <h3 className="recipe-card-title">{recipe.title}</h3>

        <div className="recipe-card-meta">
          {recipe.category && (
            <span className="recipe-card-category">
              <Tag size={14} />
              {recipe.category}
            </span>
          )}
          <span className="recipe-card-ingredients">
            <Clock size={14} />
            {recipe.ingredients.length} ingredient{recipe.ingredients.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
