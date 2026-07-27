import { Tag, ListOrdered, ShoppingCart } from 'lucide-react';
import FavoriteButton from './FavoriteButton';

function RecipeDetail({ recipe, onToggleFavorite }) {
  return (
    <div className="recipe-detail">
      {/* Hero Image */}
      <div className="recipe-detail-hero">
        {recipe.image ? (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="recipe-detail-image"
          />
        ) : (
          <div className="recipe-detail-placeholder">
            <span className="recipe-detail-placeholder-emoji">🍽️</span>
          </div>
        )}
      </div>

      {/* Header */}
      <div className="recipe-detail-header">
        <div className="recipe-detail-title-row">
          <h2 className="recipe-detail-title">{recipe.title}</h2>
          <FavoriteButton
            isFavorite={recipe.favorite}
            onClick={() => onToggleFavorite(recipe.id)}
          />
        </div>
        {recipe.category && (
          <span className="recipe-detail-category">
            <Tag size={16} />
            {recipe.category}
          </span>
        )}
      </div>

      {/* Ingredients */}
      <section className="recipe-detail-section">
        <h3 className="recipe-detail-section-title">
          <ShoppingCart size={20} />
          Ingredients
          <span className="recipe-detail-count">{recipe.ingredients.length}</span>
        </h3>
        <ul className="recipe-detail-ingredients">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="recipe-detail-ingredient">
              <span className="recipe-detail-bullet" />
              {ingredient}
            </li>
          ))}
        </ul>
      </section>

      {/* Steps */}
      <section className="recipe-detail-section">
        <h3 className="recipe-detail-section-title">
          <ListOrdered size={20} />
          Steps
        </h3>
        <ol className="recipe-detail-steps">
          {recipe.steps.map((step, index) => (
            <li key={index} className="recipe-detail-step">
              <span className="recipe-detail-step-number">{index + 1}</span>
              <p className="recipe-detail-step-text">{step}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default RecipeDetail;
