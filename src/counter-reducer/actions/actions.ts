type IncreaseByAction = { type: 'increaseBy'; payload: { value: number } };
type ResetAction = { type: 'reset' };
export type CounterAction = IncreaseByAction | ResetAction;

export const doReset = (): CounterAction => ({ type: 'reset' });

export const doIncreaseBy = (value: number): CounterAction => ({
  type: 'increaseBy',
  payload: { value },
});