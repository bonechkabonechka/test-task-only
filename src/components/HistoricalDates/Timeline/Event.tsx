interface EventProps {
  year: number;
  title: string;
}

export const Event = ({ year, title }: EventProps) => {
  return (
    <div className="event">
      <div className="event-year">{year}</div>
      <div className="event-title">{title}</div>
    </div>
  );
};
