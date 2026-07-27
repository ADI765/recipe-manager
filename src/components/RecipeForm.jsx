import { useState } from 'react';
import { Plus, Trash2, GripVertical } from 'lucide-react';

function RecipeForm({ initialData, onSubmit, onCancel }) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [image, setImage] = useState(initialData?.image || '');
  const [ingredients, setIngredients] = useState(
    initialData?.ingredients?.length ? initialData.ingredients : ['']
  );
  const [steps, setSteps] = useState(
    initialData?.steps?.length ? initialData.steps : ['']
  );
  const [errors, setErrors] = useState({});

  const categories = [
    'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert',
    'Appetizer', 'Salads', 'Soup', 'Italian', 'Indian',
    'Mexican', 'Asian', 'American', 'Other',
  ];

  function validate() {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    if (!category) {
      newErrors.category = 'Please select a category';
    }

    const validIngredients = ingredients.filter((i) => i.trim());
    if (validIngredients.length === 0) {
      newErrors.ingredients = 'Add at least one ingredient';
    }

    const validSteps = steps.filter((s) => s.trim());
    if (validSteps.length === 0) {
      newErrors.steps = 'Add at least one step';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    onSubmit({
      title: title.trim(),
      category,
      image: image.trim(),
      ingredients: ingredients.filter((i) => i.trim()),
      steps: steps.filter((s) => s.trim()),
    });
  }

  function handleAddIngredient() {
    setIngredients([...ingredients, '']);
  }

  function handleIngredientChange(index, value) {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  }

  function handleRemoveIngredient(index) {
    if (ingredients.length <= 1) return;
    setIngredients(ingredients.filter((_, i) => i !== index));
  }

  function handleAddStep() {
    setSteps([...steps, '']);
  }

  function handleStepChange(index, value) {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
  }

  function handleRemoveStep(index) {
    if (steps.length <= 1) return;
    setSteps(steps.filter((_, i) => i !== index));
  }

  return (
    <form className="recipe-form" onSubmit={handleSubmit} noValidate>
      {/* Title */}
      <div className="form-group">
        <label className="form-label" htmlFor="recipe-title">
          Recipe Title <span className="form-required">*</span>
        </label>
        <input
          id="recipe-title"
          type="text"
          className={`form-input ${errors.title ? 'form-input-error' : ''}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Spaghetti Carbonara"
        />
        {errors.title && <p className="form-error">{errors.title}</p>}
      </div>

      {/* Category */}
      <div className="form-group">
        <label className="form-label" htmlFor="recipe-category">
          Category <span className="form-required">*</span>
        </label>
        <select
          id="recipe-category"
          className={`form-input ${errors.category ? 'form-input-error' : ''}`}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        {errors.category && <p className="form-error">{errors.category}</p>}
      </div>

      {/* Image URL */}
      <div className="form-group">
        <label className="form-label" htmlFor="recipe-image">
          Image URL <span className="form-optional">(optional)</span>
        </label>
        <input
          id="recipe-image"
          type="url"
          className="form-input"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://example.com/photo.jpg"
        />
      </div>

      {/* Ingredients */}
      <div className="form-group">
        <label className="form-label">
          Ingredients <span className="form-required">*</span>
        </label>
        {errors.ingredients && <p className="form-error">{errors.ingredients}</p>}
        <div className="form-dynamic-list">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="form-dynamic-item">
              <span className="form-dynamic-grip">
                <GripVertical size={16} />
              </span>
              <input
                type="text"
                className="form-input"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                placeholder={`Ingredient ${index + 1}`}
              />
              <button
                type="button"
                className="form-dynamic-remove"
                onClick={() => handleRemoveIngredient(index)}
                disabled={ingredients.length <= 1}
                aria-label="Remove ingredient"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="form-add-btn"
          onClick={handleAddIngredient}
        >
          <Plus size={16} />
          Add Ingredient
        </button>
      </div>

      {/* Steps */}
      <div className="form-group">
        <label className="form-label">
          Steps <span className="form-required">*</span>
        </label>
        {errors.steps && <p className="form-error">{errors.steps}</p>}
        <div className="form-dynamic-list">
          {steps.map((step, index) => (
            <div key={index} className="form-dynamic-item">
              <span className="form-dynamic-number">{index + 1}</span>
              <textarea
                className="form-input form-textarea"
                value={step}
                onChange={(e) => handleStepChange(index, e.target.value)}
                placeholder={`Step ${index + 1}`}
                rows={2}
              />
              <button
                type="button"
                className="form-dynamic-remove"
                onClick={() => handleRemoveStep(index)}
                disabled={steps.length <= 1}
                aria-label="Remove step"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="form-add-btn"
          onClick={handleAddStep}
        >
          <Plus size={16} />
          Add Step
        </button>
      </div>

      {/* Actions */}
      <div className="form-actions">
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {initialData ? 'Save Changes' : 'Add Recipe'}
        </button>
      </div>
    </form>
  );
}

export default RecipeForm;
