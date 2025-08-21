import { Events } from './Timeline/Events';
import { Years } from './Timeline/Years';
import { Categories } from './Categories/Categories';
import { CircleSlider } from './Slider/CircleSlider';
import { useAppSelector } from '../../store/hooks';

export const HistoricalDates = () => {
  const { currentCategory } = useAppSelector(state => state.categories);
  return (
    <>
      <div className="wrapper">
        <div className="wrapper__square" />
      </div>
      <div className="historical-dates">
        <h1 className="historical-dates__title">Исторические даты</h1>
        <div className="historical-dates__body">
          <CircleSlider />
          <Years
            firstYear={currentCategory?.firstYear}
            lastYear={currentCategory?.lastYear}
          />
          <Categories />
          <Events currentCategory={currentCategory} />
        </div>
      </div>
    </>
  );
};
