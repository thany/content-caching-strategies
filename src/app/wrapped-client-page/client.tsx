'use client';

import { Translations } from "../util/translations";

interface Props {
  translations: Translations;
}

const Page: React.FC<Props> = ({ translations }) => {
  return (
    <>
      <h1>Wrapped client page</h1>
      <p>This is a client page that is wrapped within a server component that fetches the translations on its turn, and passes it onto this client page. It is a little bit more complicated in code than a pure client page, but you might be able to see that there's no split second where translations aren't available like in the pure client page.</p>
      <pre>{JSON.stringify(translations, undefined, 2)}</pre>
    </>
  );
};
export default Page;