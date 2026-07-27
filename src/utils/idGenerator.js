/**
 * Generate a unique ID for recipes.
 * Uses crypto.randomUUID when available, falls back to timestamp + random.
 * @returns {string} A unique identifier string.
 */
export function generateId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
}
