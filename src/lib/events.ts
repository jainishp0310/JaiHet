export type RomanticEvent = {
  id: string;
  name: string;
  date: string; // ISO string e.g., '2025-02-05T00:00:00'
  tag: 'Anniversary' | 'Birthday' | 'Special Date';
};

// Use future dates for demonstration of the countdown feature.
const getFutureDate = (month: number, day: number) => {
  const today = new Date();
  const year = today.getFullYear();
  const eventDate = new Date(year, month - 1, day);
  if (eventDate < today) {
    return new Date(year + 1, month - 1, day).toISOString();
  }
  return eventDate.toISOString();
}

export const events: RomanticEvent[] = [
  {
    id: 'anniversary',
    name: 'Our Anniversary',
    date: '2022-05-03T00:00:00', // May 3rd
    tag: 'Anniversary',
  },
  {
    id: 'birthday',
    name: "Her Birthday",
    date: getFutureDate(10, 10), // October 10th
    tag: 'Birthday',
  },
  {
    id: 'special-date',
    name: 'Our Special Day',
    date: getFutureDate(5, 22), // May 22nd
    tag: 'Special Date',
  },
];
