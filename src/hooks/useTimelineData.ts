import { useState, useCallback } from 'react';
import { Category } from '../types/timeline';
import timelineData from '../assets/db/db.json';

export const useTimelineData = () => {
  const [currentCategory, setCurrentCategory] = useState<Category | null>(
    timelineData.categories[0] || null
  );

  const handleCategorySelect = useCallback((category: Category): void => {
    setCurrentCategory(category);
  }, []);

  return {
    categories: timelineData.categories,
    currentCategory,
    handleCategorySelect,
  };
};
