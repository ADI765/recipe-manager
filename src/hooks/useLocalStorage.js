import { useState, useEffect } from 'react';

/**
 * Generic hook for syncing React state with localStorage.
 * @param {string} key - The localStorage key.
 * @param {*} initialValue - Default value if key doesn't exist.
 * @returns {[*, Function]} Tuple of [storedValue, setValue].
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      console.error(`Failed to read "${key}" from localStorage`);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
      console.error(`Failed to write "${key}" to localStorage`);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
