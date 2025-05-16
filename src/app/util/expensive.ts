import { cache } from "react";
import { setTimeout } from 'timers/promises';

const expensiveComputation = cache(async (): Promise<string> => {
  const result = Math.round(Math.random() * 100);
  await setTimeout(2000);
  return `Computation is done, answer is ${result}. Have fun.`;
});

export default expensiveComputation;