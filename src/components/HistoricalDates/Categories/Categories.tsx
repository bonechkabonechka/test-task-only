import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  goToNextCategory,
  goToPreviousCategory,
} from '../../../store/slices/categoriesSlice';
import { useKeyboardNavigation } from '../../../hooks/useKeyboardNavigation';

export const Categories = () => {
  const dispatch = useAppDispatch();
  const { selectedIndex, categories } = useAppSelector(
    state => state.categories
  );

  useKeyboardNavigation({
    onArrowLeft: () => dispatch(goToPreviousCategory()),
    onArrowRight: () => dispatch(goToNextCategory()),
  });

  return (
    <div className="categories">
      <div className="categories__navigation">
        <div className="categories__counter">
          {String(selectedIndex + 1).padStart(2, '0')} /{' '}
          {String(categories.length).padStart(2, '0')}
        </div>
        <div className="categories__arrows">
          <button
            className="categories__arrow categories__arrow--left"
            onClick={() => dispatch(goToPreviousCategory())}
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 1L2 6L7 11" stroke="#3877EE" strokeWidth="2" />
            </svg>
          </button>
          <button
            className="categories__arrow categories__arrow--right"
            onClick={() => dispatch(goToNextCategory())}
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
