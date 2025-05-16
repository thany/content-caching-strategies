'use client';

import { Customers } from "../util/customers";
import { Translations } from "../util/translations";

interface Props {
  translations: Translations;
  customers: Customers;
}

const Page: React.FC<Props> = ({ translations, customers }) => {
  return (
    <>
      <h1>Wrapped client page</h1>
      <p>This is a client page that is wrapped within a server component that fetches the translations on its turn, and passes it onto this client page. It is a little bit more complicated in code than a pure client page, but you might be able to see that there's no split second where translations aren't available like in the pure client page.</p>
      <pre>{Object.values(translations).join(' — ')}</pre>
      <h2>Customer data that is subject to more frequent changes</h2>
      <p>This data should change with every page reload:</p>
      <table>
        <tbody>
          {customers.map((customer, index) => (
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