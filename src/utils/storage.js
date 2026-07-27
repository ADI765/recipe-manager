/**
 * localStorage utility for recipes persistence.
 * Key: "recipes" — stores JSON stringified array of recipe objects.
 */

const STORAGE_KEY = 'recipes';

/**
 * Read all recipes from localStorage.
 * @returns {Array} Array of recipe objects, or empty array if none exist.
 */
export function getRecipes() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    console.error('Failed to read recipes from localStorage');
    return [];
  }
}

/**
 * Save the entire recipes array to localStorage.
 * @param {Array} recipes - Array of recipe objects to persist.
 */
export function saveRecipes(recipes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
  } catch {
    console.error('Failed to save recipes to localStorage');
  }
}
