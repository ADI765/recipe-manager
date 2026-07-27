import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Pencil, Trash2 } from 'lucide-react';
import RecipeDetail from '../components/RecipeDetail';
import ConfirmDialog from '../components/ConfirmDialog';

function RecipeDetailPage({ recipes, onDelete, onToggleFavorite }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="detail-page">
        <p className="detail-not-found">Recipe not found.</p>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          <ArrowLeft size={18} />
          Back to Recipes
        </button>
      </div>
    );
  }

  function handleDelete() {
    onDelete(recipe.id);
    navigate('/');
  }

  return (
    <div className="detail-page">
      <div className="detail-page-nav">
        <button
          className="detail-back"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="detail-page-actions">
          <button
            className="btn btn-secondary"
            onClick={() => navigate(`/edit/${recipe.id}`)}
          >
            <Pencil size={16} />
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setShowConfirm(true)}
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>

      <RecipeDetail recipe={recipe} onToggleFavorite={onToggleFavorite} />

      {showConfirm && (
        <ConfirmDialog
          title="Delete Recipe"
          message={`Are you sure you want to delete "${recipe.title}"? This action cannot be undone.`}
          onConfirm={handleDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
}

export default RecipeDetailPage;
