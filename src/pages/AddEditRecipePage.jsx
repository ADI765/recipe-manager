import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import RecipeForm from '../components/RecipeForm';

function AddEditRecipePage({ recipes, onAdd, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditing = Boolean(id);
  const existingRecipe = isEditing
    ? recipes.find((r) => r.id === id)
    : null;

  if (isEditing && !existingRecipe) {
    return (
      <div className="add-edit-page">
        <p className="add-edit-not-found">Recipe not found.</p>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          <ArrowLeft size={18} />
          Back to Recipes
        </button>
      </div>
    );
  }

  function handleSubmit(formData) {
    if (isEditing) {
      onUpdate(id, formData);
    } else {
      onAdd(formData);
    }
    navigate('/');
  }

  function handleCancel() {
    navigate(-1);
  }

  return (
    <div className="add-edit-page">
      <button
        className="add-edit-back"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <h2 className="add-edit-title">
        {isEditing ? 'Edit Recipe' : 'New Recipe'}
      </h2>

      <RecipeForm
        initialData={existingRecipe}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default AddEditRecipePage;
