import { INCREMENT, DECREMENT } from "../actions/counter.actions";

const initialState = {
  counter: 987654321,
};

const counter = (state = initialState, action) => {
  // boleh menggunakan apapun switch case, if else, ternary
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default counter;
