import { getCustomers } from "../util/customers";
import { getTranslations } from "../util/translations";

const Page: React.FC = async () => {
  const translations = await getTranslations();
  const customers = await getCustomers();

  return (
    <>
      <h1>Server page</h1>
      <p>This is a server page that is able to use <code>getTranslations</code> directly. It's the simplest form, but it cannot be a client page, should another component require it.</p>
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