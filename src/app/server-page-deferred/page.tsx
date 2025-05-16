import { Suspense } from "react";
import { getCustomers } from "../util/customers";
import { getTranslations } from "../util/translations";
import Loading from "./loading";
import Customers from "./customers";

const Page: React.FC = async () => {
  const translations = await getTranslations();

  return (
    <>
      <h1>Server page (deferred)</h1>
      <p>This is a server page that is loads able to use <code>getTranslations</code> directly, but defers loading customers in a separate component (which is still a server component!). It's not faster than a regular server page technically speaking, but it should start rendering sooner.</p>
      <pre>{Object.values(translations).join(' — ')}</pre>
      <h2>Customer data that is subject to more frequent changes</h2>
      <p>This data should change with every page reload:</p>
      <Suspense fallback={<Loading/>}>
        <Customers />
      </Suspense>
    </>
  );
};

export default Page;