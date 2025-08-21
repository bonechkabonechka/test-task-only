import { CircularPoints } from './CircularPoints';
import { useAppSelector } from '../../../store/hooks';

export const CircleSlider = () => {
  const { categories } = useAppSelector(state => state.categories);

  return (
    <div className="circular">
      <CircularPoints categories={categories} />
    </div>
  );
};
