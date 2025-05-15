import { getTranslations } from "../util/translations";

const Page: React.FC = async () => {
  const translations = await getTranslations();

  return (
    <>
      <h1>Server page</h1>
      <p>This is a server page that is able to use <code>getTranslations</code> directly. It's the simplest form, but it cannot be a client page, should another component require it.</p>
      <pre>{JSON.stringify(translations, undefined, 2)}</pre>
    </>
  );
};

export default Page;