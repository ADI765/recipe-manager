import { useLocalStorage } from './useLocalStorage';
import { generateId } from '../utils/idGenerator';

/**
 * Hook for managing the recipes collection.
 * Provides CRUD operations + favorite toggle.
 * Single source of truth: recipes array synced with localStorage.
 *
 * Recipe shape:
 * { id, title, category, ingredients[], steps[], image, favorite, createdAt }
 */
export function useRecipes() {
  const [recipes, setRecipes] = useLocalStorage('recipes', []);

  /**
   * Add a new recipe.
   * @param {Object} recipeData - Recipe fields (without id, favorite, createdAt).
   * @returns {Object} The newly created recipe with generated fields.
   */
  function addRecipe(recipeData) {
    const newRecipe = {
      id: generateId(),
      title: recipeData.title,
      category: recipeData.category || '',
      ingredients: recipeData.ingredients || [],
      steps: recipeData.steps || [],
      image: recipeData.image || '',
      favorite: false,
      createdAt: new Date().toISOString(),
    };

    setRecipes((prev) => [newRecipe, ...prev]);
    return newRecipe;
  }

  /**
   * Update an existing recipe by ID.
   * @param {string} id - The recipe ID to update.
   * @param {Object} updates - Fields to merge into the recipe.
   */
  function updateRecipe(id, updates) {
    setRecipes((prev) =>
      prev.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updates } : recipe
      )
    );
  }

  /**
   * Delete a recipe by ID.
   * @param {string} id - The recipe ID to remove.
   */
  function deleteRecipe(id) {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
  }

  /**
   * Toggle the favorite status of a recipe.
   * @param {string} id - The recipe ID to toggle.
   */
  function toggleFavorite(id) {
    setRecipes((prev) =>
      prev.map((recipe) =>
        recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  }

  /**
   * Get a single recipe by ID.
   * @param {string} id - The recipe ID to find.
   * @returns {Object|undefined} The recipe or undefined.
   */
  function getRecipeById(id) {
    return recipes.find((recipe) => recipe.id === id);
  }

  return {
    recipes,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    toggleFavorite,
    getRecipeById,
  };
}
