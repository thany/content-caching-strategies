import { getCustomers } from "../util/customers";

const Customers: React.FC = async () => {
  const customers = await getCustomers();

  return (
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
  );
};

export default Customers;