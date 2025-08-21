import { useState, useEffect } from 'react';
import CountUp from '../CountUp/CountUp';

interface YearProps {
  firstYear: number | undefined;
  lastYear: number | undefined;
}

export const Years = ({ firstYear, lastYear }: YearProps) => {
  const [prevFirstYear, setPrevFirstYear] = useState<number>(0);
  const [prevLastYear, setPrevLastYear] = useState<number>(0);

  useEffect(() => {
    if (firstYear !== undefined) {
      setPrevFirstYear(firstYear);
    }
  }, [firstYear]);

  useEffect(() => {
    if (lastYear !== undefined) {
      setPrevLastYear(lastYear);
    }
  }, [lastYear]);

  return (
    <div className="years">
      <div className="years-first">
        {firstYear !== undefined ? (
          <CountUp
            from={prevFirstYear}
            to={firstYear}
            duration={0.5}
            className="count-up-text"
          />
        ) : (
          '—'
        )}
      </div>
      &nbsp;
      <div className="years-last">
        {lastYear !== undefined ? (
          <CountUp
            from={prevLastYear}
            to={lastYear}
            duration={0.5}
            className="count-up-text"
          />
        ) : (
          0
        )}
      </div>
    </div>
  );
};
