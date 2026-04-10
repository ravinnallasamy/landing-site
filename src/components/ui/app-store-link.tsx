import React from 'react';
import { redirectToWayTreeAppStore } from '@/lib/app-store-redirect';

interface AppStoreLinkProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * A component that redirects users to the appropriate app store based on their platform
 * iOS/Mac users go to App Store, Android users go to Play Store, others go to Play Store as fallback
 */
export const AppStoreLink: React.FC<AppStoreLinkProps> = ({ 
  children, 
  className, 
  onClick 
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }
    
    // Redirect to appropriate app store
    redirectToWayTreeAppStore();
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
};
