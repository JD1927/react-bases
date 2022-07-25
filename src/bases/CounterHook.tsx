import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
  const { counter, handleClick, counterElement } = useCounter();

  return (
    <>
      <h1>Counter Effect</h1>
      <h2 ref={counterElement} className="mi-objeto">{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
