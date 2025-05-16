'use server';

export type Translations = Record<string, string>;

// Shared data fetching function
export const getTranslations = async(): Promise<Translations> => {
  const url = new URL('http://localhost:3001/translations.json');

  const res = await fetch(url.toString(), {
    next: { revalidate: 10 }, // Apply ISR strategy
  });

  return res.json();
};
