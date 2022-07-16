import { useState } from 'react';

interface CounterByProps {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: CounterByProps) => {

  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleCounter = (value: number): void => {
    setCounterState(({ counter, clicks }) => ({
      counter: counter + value,
      clicks: clicks + 1
    }));
  };

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>
      <button onClick={() => handleCounter(1)}>+1</button>
      <button onClick={() => handleCounter(5)}>+5</button>
    </>
  )
}
