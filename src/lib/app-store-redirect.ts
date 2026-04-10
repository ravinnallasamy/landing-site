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

  const startTime = Date.now();
  let fallbackTimeout: NodeJS.Timeout;

  // Method 1: Try window.location for direct navigation
  const tryDirectNavigation = () => {
    try {
      // For iOS and Android, try direct navigation to the scheme
      window.location.href = scheme;
      
      // Set fallback timeout
      fallbackTimeout = setTimeout(() => {
        // If we're still here after 2 seconds, try the web URL
        if (Date.now() - startTime < 2500) {
          window.open(fallbackUrl, '_blank');
        }
      }, 2000);
    } catch (error) {
      // If direct navigation fails, immediately fallback
      window.open(fallbackUrl, '_blank');
    }
  };

  // Method 2: Try using window.open for mobile browsers
  const tryWindowOpen = () => {
    try {
      const newWindow = window.open(scheme, '_blank');
      
      // If window.open returns null or undefined, the scheme might not be supported
      if (!newWindow) {
        setTimeout(() => {
          window.open(fallbackUrl, '_blank');
        }, 500);
      } else {
        // Close the potentially failed window and open fallback
        newWindow.close();
        setTimeout(() => {
          window.open(fallbackUrl, '_blank');
        }, 1000);
      }
    } catch (error) {
      // Fallback to web URL immediately
      window.open(fallbackUrl, '_blank');
    }
  };

  // Detect user agent and choose appropriate method
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (/iphone|ipad|ipod/.test(userAgent)) {
    // iOS: Try direct navigation first
    tryDirectNavigation();
  } else if (/android/.test(userAgent)) {
    // Android: Try window.open first (more reliable on Android)
    tryWindowOpen();
  } else {
    // Desktop: Try direct navigation
    tryDirectNavigation();
  }

  // Global fallback - if nothing works after 3 seconds
  setTimeout(() => {
    if (Date.now() - startTime < 3500) {
      window.open(fallbackUrl, '_blank');
    }
  }, 3000);
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
      // Use direct navigation for iOS/Mac - opens App Store app directly without fallback
      window.location.href = 'https://apps.apple.com/app/id6761415676';
      break;
      
    case 'android':
      // Try Play Store scheme first, then fallback to universal link
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
  ios: 'https://apps.apple.com/app/id6761415676', // Universal link for iOS
  android: 'https://play.google.com/store/apps/details?id=com.waytree.app', // Universal link for Android
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
