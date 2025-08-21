import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Category } from '../../../types/timeline';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { goToCategoryByIndex } from '../../../store/slices/categoriesSlice';

interface Props {
  categories: Category[];
}

export const CircularPoints: React.FC<Props> = ({ categories }) => {
  const dispatch = useAppDispatch();
  const { selectedIndex } = useAppSelector(state => state.categories);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getAngle = (index: number, selectedIndex: number): number => {
    const baseAngle = index * 60 - selectedIndex * 60 + 300;
    return baseAngle;
  };

  const handlePointClick = (index: number): void => {
    dispatch(goToCategoryByIndex(index));
  };
  const points =
    categories.length > 0
      ? categories.slice(0, 6)
      : Array.from({ length: 6 }, (_, i) => ({
          name: `Категория ${i + 1}`,
          id: i + 1,
        }));

  return (
    <div className="circular-navigation">
      <div className="circular-navigation__track" />
      {points.map((point, index) => {
        const currentAngle = getAngle(index, selectedIndex);
        const angleInRadians = (currentAngle * Math.PI) / 180;
        const isSelected = index === selectedIndex;
        const isRightSide = angleInRadians > Math.PI;

        return (
          <motion.div
            key={index}
            className="circular-navigation__point-container"
            animate={{
              rotate: currentAngle,
            }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 20,
              duration: 1,
            }}
          >
            <motion.div
              className="circular-navigation__point-wrapper"
              animate={{
                rotate: -currentAngle,
              }}
              transition={{
                type: 'spring',
                stiffness: 80,
                damping: 20,
                duration: 1,
              }}
            >
              <motion.div
                className={`circular-navigation__point ${
                  isSelected
                    ? 'circular-navigation__point--active'
                    : 'circular-navigation__point--default'
                }`}
                whileHover={{
                  scale: isSelected ? 1.7 : 1.3,
                  opacity: 1,
                }}
                onClick={() => handlePointClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />

              <AnimatePresence>
                {hoveredIndex === index && (
                  <div className="circular-navigation__tooltip">
                    {index + 1}
                  </div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    className={`circular-navigation__category-label ${
                      isRightSide
                        ? 'circular-navigation__category-label--right'
                        : 'circular-navigation__category-label--left'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {point.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};
