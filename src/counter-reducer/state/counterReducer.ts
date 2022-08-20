import { CounterAction } from '../actions/actions';
import { CounterState } from '../interfaces/interfaces';

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
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
