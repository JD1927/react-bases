type IncreaseByAction = { type: 'increaseBy', payload: { value: number; }; };
type ResetAction = { type: 'reset'; };
export type CounterAction = IncreaseByAction | ResetAction;