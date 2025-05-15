import { WithTranslations } from "../util/translations";
import Page from "./client";

const Page1Wrapped: React.FC = () => {
  return (
    <WithTranslations render={translations => <Page translations={translations}/>} />
  );
};

export default Page1Wrapped;