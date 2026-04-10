/**
 * Platform detection and app store redirect utility
 * Detects user's platform and redirects to appropriate app store
 * Tries native app store schemes first, then falls back to web versions
 */

export type Platform = 'ios' | 'android' | 'mac' | 'windows' | 'linux' | 'unknown';

export interface AppStoreUrls {
  ios: string;
  android: string;
  fallback: string; // For web/laptop users
}

export interface AppStoreSchemes {
  ios: string; // App Store deep link scheme
  android: string; // Play Store deep link scheme
  web: {
    ios: string; // Web App Store URL
    android: string; // Web Play Store URL
  };
}

/**
 * Detects the user's platform based on user agent
 */
export function detectPlatform(): Platform {
  if (typeof window === 'undefined') {
    return 'unknown';
  }

  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = window.navigator.platform.toLowerCase();

  // iOS detection
  if (
    /iphone|ipad|ipod/.test(userAgent) ||
    (platform === 'macintel' && navigator.maxTouchPoints > 1) // iPad Pro detection
  ) {
    return 'ios';
  }

  // Mac detection
  if (/mac/.test(platform)) {
    return 'mac';
  }

  // Android detection
  if (/android/.test(userAgent)) {
    return 'android';
  }

  // Windows detection
  if (/win/.test(platform)) {
    return 'windows';
  }

  // Linux detection
  if (/linux/.test(platform)) {
    return 'linux';
  }

  return 'unknown';
}

/**
 * Attempts to open a deep link scheme, falls back to web URL if it fails
 */
export function tryOpenDeepLink(scheme: string, fallbackUrl: string): void {
  if (typeof window === 'undefined') return;

  // Try to open the deep link scheme first
  const startTime = Date.now();
  
  // Create a hidden iframe to try the deep link
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = scheme;
  document.body.appendChild(iframe);

  // Set a timeout to check if the deep link worked
  setTimeout(() => {
    document.body.removeChild(iframe);
    
    // If the user hasn't left the page after a reasonable time, assume deep link failed
    if (Date.now() - startTime < 2000) {
      window.open(fallbackUrl, '_blank');
    }
  }, 1500);
}

/**
 * Gets the appropriate app store URL based on platform
 */
export function getAppStoreUrl(urls: AppStoreUrls): string {
  const platform = detectPlatform();

  switch (platform) {
    case 'ios':
    case 'mac':
      return urls.ios;
    case 'android':
      return urls.android;
    case 'windows':
    case 'linux':
    case 'unknown':
    default:
      return urls.fallback;
  }
}

/**
 * Redirects user to appropriate app store with native app priority
 */
export function redirectToAppStore(urls: AppStoreUrls): void {
  if (typeof window === 'undefined') return;

  const platform = detectPlatform();

  switch (platform) {
    case 'ios':
    case 'mac':
      // Try App Store deep link first, then fallback to web
      tryOpenDeepLink(
        'itms-apps://itunes.apple.com/app/id6761415676',
        'https://apps.apple.com/app/waytree/id6761415676'
      );
      break;
      
    case 'android':
      // Try Play Store deep link first, then fallback to web
      tryOpenDeepLink(
        'market://details?id=com.waytree.app',
        'https://play.google.com/store/apps/details?id=com.waytree.app'
      );
      break;
      
    case 'windows':
    case 'linux':
    case 'unknown':
    default:
      // For desktop/web users, go directly to Play Store web
      window.open('https://play.google.com/store/apps/details?id=com.waytree.app', '_blank');
      break;
  }
}

/**
 * WayTree app store configuration
 */
export const WAYTREE_APP_STORE_URLS: AppStoreUrls = {
  ios: 'https://apps.apple.com/app/waytree/id6761415676',
  android: 'https://play.google.com/store/apps/details?id=com.waytree.app',
  fallback: 'https://play.google.com/store/apps/details?id=com.waytree.app'
};

/**
 * WayTree app store deep link schemes
 */
export const WAYTREE_APP_STORE_SCHEMES: AppStoreSchemes = {
  ios: 'itms-apps://itunes.apple.com/app/id6761415676',
  android: 'market://details?id=com.waytree.app',
  web: {
    ios: 'https://apps.apple.com/app/waytree/id6761415676',
    android: 'https://play.google.com/store/apps/details?id=com.waytree.app'
  }
};

/**
 * Convenience function for WayTree app store redirect with native app priority
 */
export function redirectToWayTreeAppStore(): void {
  redirectToAppStore(WAYTREE_APP_STORE_URLS);
}

/**
 * Hook for getting the WayTree app store URL
 */
export function useWayTreeAppStoreUrl(): string {
  return getAppStoreUrl(WAYTREE_APP_STORE_URLS);
}
