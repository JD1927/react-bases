import { useReducer } from 'react';

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};
type IncreaseByAction = { type: 'increaseBy', payload: { value: number; }; };
type ResetAction = { type: 'reset'; };
type CounterAction = IncreaseByAction | ResetAction;


const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increaseBy':
      const { value } = action.payload;
      return {
        ...state,
        previous: state.counter,
        changes: state.changes + 1,
        counter: state.counter + value,
      };
    case 'reset':
      return {
        previous: 0,
        changes: 0,
        counter: 0,
      };

    default:
      return state;
  }
};

export const CounterReducerComponent = () => {

  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  const { counter } = counterState;

  const increaseBy = (value: number): void => {
    dispatch({ type: 'increaseBy', payload: { value } });
    console.log(counterState);
  };

  const handleReset = (): void => {
    dispatch({ type: 'reset' });
  };

  return (
    <>
      <h1>Counter Reducer: {counter}</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>RESET</button>
    </>
  );
};
