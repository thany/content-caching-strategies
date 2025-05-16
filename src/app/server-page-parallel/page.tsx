import Link from "next/link";
import { getCustomers } from "../util/customers";
import { getTranslations } from "../util/translations";

const Page: React.FC = async () => {
  const [ translations, customers ] = await Promise.all([
    getTranslations(),
    getCustomers(),
  ]);

  return (
    <>
      <h1>Server page (parallel)</h1>
      <p>This is a variant of the <Link href="/server-page">server page</Link> that fetches translations and customers in parallel, just to prove that this works, but still calls <code>getTranslations</code> and <code>getCustomers</code> directly. It should be slighty faster because one request doesn't need to wait for another.</p>
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