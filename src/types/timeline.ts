export interface TimelineEvent {
  year: number;
  title: string;
}

export interface Category {
  id: number;
  name: string;
  firstYear: number;
  lastYear: number;
  events: TimelineEvent[];
}

export interface TimelineData {
  categories: Category[];
}

export interface YearsDisplayProps {
  firstYear?: number;
  lastYear?: number;
}

export interface EventsDisplayProps {
  currentCategory: Category | null;
}
