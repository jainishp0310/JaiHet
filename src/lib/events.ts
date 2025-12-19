export type RomanticEvent = {
  id: string;
  name: string;
  date: string; // ISO string e.g., '2025-02-05T00:00:00'
  tag: 'Anniversary' | 'Birthday' | 'Special Date';
};

// Use future dates for demonstration of the countdown feature.
export const events: RomanticEvent[] = [
  {
    id: 'anniversary',
    name: 'Our Anniversary',
    date: new Date(new Date().getFullYear() + 1, 1, 5).toISOString(), // Feb 5
    tag: 'Anniversary',
  },
  {
    id: 'birthday',
    name: "Her Birthday",
    date: new Date(new Date().getFullYear() + 1, 2, 10).toISOString(), // Mar 10
    tag: 'Birthday',
  },
  {
    id: 'special-date',
    name: 'Our Special Day',
    date: new Date(new Date().getFullYear() + 1, 4, 22).toISOString(), // May 22
    tag: 'Special Date',
  },
];
