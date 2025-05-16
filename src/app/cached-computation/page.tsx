import Link from "next/link";
import expensiveComputation from "../util/expensive";
import ExpensiveComponent from "./component";

const Page: React.FC = async () => {
  const expensiveResult = await expensiveComputation();

  return (
    <>
      <h1>Cached computation</h1>
      <p>This page shows the use (or lack thereof) of an expensive computation that is being cached.</p>
      <p>Normally this computation takes 2 seconds, but it's used multiple times. The result is cached using the <code>cache</code> function, which caches data <strong>within a single rendering pass</strong>. This cache is invalidated/destroyed when navigation to another page, even if it isn't a full page reload.</p>
      <p>Result from here: <strong>{expensiveResult}</strong></p>
      <p>All components below here use the same function, but the cache guarantees that it only takes the neccesary 2 seconds <strong>once</strong>.</p>
      <ExpensiveComponent result={1} />
      <ExpensiveComponent result={2} />
      <ExpensiveComponent result={3} />
      <ExpensiveComponent result={4} />
      <ExpensiveComponent result={5} />
    </>
  );
};

export default Page;