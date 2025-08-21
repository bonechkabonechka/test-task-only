import { useEffect } from 'react';

interface UseKeyboardNavigationProps {
  onArrowLeft: () => void;
  onArrowRight: () => void;
  isEnabled?: boolean;
}

export const useKeyboardNavigation = ({
  onArrowLeft,
  onArrowRight,
  isEnabled = true,
}: UseKeyboardNavigationProps) => {
  useEffect(() => {
    if (!isEnabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          onArrowLeft();
          break;
        case 'ArrowRight':
          event.preventDefault();
          onArrowRight();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onArrowLeft, onArrowRight, isEnabled]);
};
