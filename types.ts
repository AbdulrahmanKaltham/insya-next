
export enum Category {
  EVENT = 'فعالية',
  PUBLICATION = 'إصدار',
  WORKSHOP = 'ورشة عمل'
}

export interface Announcement {
  id: string;
  category: Category;
  title: string;
  description: string;
  date: string;
  location: string;
  ctaText: string;
}

export interface Goal {
  title: string;
  bullets: string[];
}

export interface Track {
  title: string;
  bullets: string[];
  icon: string;
}

export interface Circle {
  title: string;
  description: string;
  subUnits: string[];
}
