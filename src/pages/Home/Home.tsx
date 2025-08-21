import React from 'react';
import { HistoricalDates } from '../../components/HistoricalDates/HistoricalDates';

export const Home = () => {
  return (
    <section className="home container">
      <div className="wrapper">
        <div className="wrapper__square" />
      </div>

      <HistoricalDates />
    </section>
  );
};
