import { useState, useCallback } from 'react';

export const useCircularNavigation = (totalItems: number) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const goToNext = useCallback(() => {
    setSelectedIndex(prev => (prev < totalItems - 1 ? prev + 1 : 0));
  }, [totalItems]);

  const goToPrevious = useCallback(() => {
    setSelectedIndex(prev => (prev > 0 ? prev - 1 : totalItems - 1));
  }, [totalItems]);

  const goToIndex = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalItems) {
        setSelectedIndex(index);
      }
    },
    [totalItems]
  );

  return {
    selectedIndex,
    setSelectedIndex,
    goToNext,
    goToPrevious,
    goToIndex,
  };
};
