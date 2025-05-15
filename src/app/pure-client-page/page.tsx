'use client';

import { useEffect, useState } from "react";
import { getTranslations, Translations } from "../util/translations";

const Page: React.FC = () => {
  const [ translations, setTranslations ] = useState<Translations>();

  useEffect(() => {
    const fetchTranslations = async () => {
      setTranslations(await getTranslations());
    };
    fetchTranslations();
  }, [])

  return (
    <>
      <h1>Pure client page</h1>
      <p>This is a pure client page that uses a <code>useEffect</code> call to fetch the translations on its own. The fetch will still go through Next.js and (in production) the caching strategy is respected as well. However as you might be able to see, there is a split second where translations are unavailable as they haven't been fetched yet.</p>
      <pre>{JSON.stringify(translations, undefined, 2)}</pre>
    </>
  );
};

export default Page;