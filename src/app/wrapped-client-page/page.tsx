import { getCustomers } from "../util/customers";
import { WithTranslations } from "../util/translations";
import Page from "./client";

const Page1Wrapped: React.FC = async () => {
  const customers = await getCustomers();

  return (
    <WithTranslations render={translations => (
      <Page translations={translations} customers={customers}/>
    )} />
  );
};

export default Page1Wrapped;