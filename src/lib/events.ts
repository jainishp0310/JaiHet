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
    date: '2022-05-02T00:00:00', // May 2nd, 2022
    tag: 'Anniversary',
  },
  {
    id: 'birthday',
    name: "Her Birthday",
    date: '2010-03-10T00:00:00', // March 10th, 2010
    tag: 'Birthday',
  },
  {
    id: 'special-date',
    name: 'Our Special Day',
    date: '2022-05-22T00:00:00', // May 22nd, 2022
    tag: 'Special Date',
  },
];
