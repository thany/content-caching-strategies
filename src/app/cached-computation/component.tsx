import expensiveComputation from "../util/expensive";

const ExpensiveComponent: React.FC<{ result: number }> = async ({ result }) => {
  const expensiveResult = await expensiveComputation();

  return (
    <p>Result from child {result}: <strong>{expensiveResult}</strong></p>
  );
};

export default ExpensiveComponent;