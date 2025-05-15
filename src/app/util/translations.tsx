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

export const WithTranslations: React.FC<{
  render: (translations: Translations) => React.ReactNode;
}> = async ({ render }) => {
  const translations = await getTranslations(); // Data fetching with ISR

  return <>{render(translations)}</>;
};