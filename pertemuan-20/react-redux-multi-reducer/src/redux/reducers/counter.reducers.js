import { INCREMENT, DECREMENT } from "../actions/counter.actions";

const initialState = {
  counter: 0,
};

const counter = (state = initialState, action) => {
  // boleh menggunakan apapun switch case, if else, ternary
  console.log("action", action);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    // break;
    case DECREMENT:
      if (state.counter > 0) {
        return {
          ...state,
          counter: state.counter - 1,
        };
      } else {
        return state;
      }
    // break;
    default:
      return state;
  }
};

export default counter;
