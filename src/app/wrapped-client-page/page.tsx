import { getCustomers } from "../util/customers";
import { getTranslations } from "../util/translations";
import Page from "./client";

const Page1Wrapped: React.FC = async () => {
  const translations = await getTranslations(); // Data fetching with ISR
  const customers = await getCustomers();

  return (
    <Page translations={translations} customers={customers}/>
  );
};

export default Page1Wrapped;