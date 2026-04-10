/**
 * Client-side cache utilities for UI state and non-sensitive data
 * Uses localStorage with proper error handling and type safety
 */

const CACHE_PREFIX = 'waytree_';
const CACHE_VERSION = 'v1';
const CACHE_EXPIRY_MS = 30 * 60 * 1000; // 30 minutes

interface CacheItem<T> {
  data: T;
  timestamp: number;
  version: string;
}

/**
 * Safely get item from cache
 */
export function getCachedItem<T>(key: string): T | null {
  try {
    if (typeof window === 'undefined') return null;
    
    const fullKey = `${CACHE_PREFIX}${key}`;
    const itemStr = localStorage.getItem(fullKey);
    
    if (!itemStr) return null;
    
    const item: CacheItem<T> = JSON.parse(itemStr);
    
    // Check version
    if (item.version !== CACHE_VERSION) {
      localStorage.removeItem(fullKey);
      return null;
    }
    
    // Check expiry
    if (Date.now() - item.timestamp > CACHE_EXPIRY_MS) {
      localStorage.removeItem(fullKey);
      return null;
    }
    
    return item.data;
  } catch (error) {
    console.warn('Cache read error:', error);
    return null;
  }
}

/**
 * Safely set item in cache
 */
export function setCachedItem<T>(key: string, data: T): void {
  try {
    if (typeof window === 'undefined') return;
    
    const fullKey = `${CACHE_PREFIX}${key}`;
    const item: CacheItem<T> = {
      data,
      timestamp: Date.now(),
      version: CACHE_VERSION
    };
    
    localStorage.setItem(fullKey, JSON.stringify(item));
  } catch (error) {
    console.warn('Cache write error:', error);
  }
}

/**
 * Remove specific cache item
 */
export function removeCachedItem(key: string): void {
  try {
    if (typeof window === 'undefined') return;
    
    const fullKey = `${CACHE_PREFIX}${key}`;
    localStorage.removeItem(fullKey);
  } catch (error) {
    console.warn('Cache remove error:', error);
  }
}

/**
 * Clear all app cache
 */
export function clearAllCache(): void {
  try {
    if (typeof window === 'undefined') return;
    
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(CACHE_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.warn('Cache clear error:', error);
  }
}

/**
 * UI State Cache Keys
 */
export const CACHE_KEYS = {
  SCROLL_POSITION: 'scroll_position',
  THEME_PREFERENCE: 'theme_preference',
  NAVIGATION_STATE: 'navigation_state',
  FORM_DATA: 'form_data'
} as const;
