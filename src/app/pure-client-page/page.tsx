'use client';

import { useEffect, useState } from "react";
import { getTranslations, Translations } from "../util/translations";
import { getCustomers, Customers } from "../util/customers";

const Page: React.FC = () => {
  const [ translations, setTranslations ] = useState<Translations>();
  const [ customers, setCustomers ] = useState<Customers>();

  useEffect(() => {
    const fetchTranslations = async () => {
      setTranslations(await getTranslations());
    };
    const fetchCustomers = async () => {
      setCustomers(await getCustomers());
    };
    fetchTranslations();
    fetchCustomers();
  }, [])

  return (
    <>
      <h1>Pure client page</h1>
      <p>This is a pure client page that uses a <code>useEffect</code> call to fetch the translations on its own. The fetch will still go through Next.js and (in production) the caching strategy is respected as well. However as you might be able to see, there is a split second where translations are unavailable as they haven't been fetched yet.</p>
      <pre>{Object.values(translations ?? {}).join(' — ')}</pre>
      <h2>Customer data that is subject to more frequent changes</h2>
      <p>This data should change with every page reload:</p>
      <table>
        <tbody>
          {(customers ?? []).map((customer, index) => (
            <tr key={customer}>
              <td>{index}</td>
              <td>{customer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Page;