import { INCREMENT, DECREMENT } from "../actions/counter.actions";

const initialState = {
  counter: 99999999,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
        person: action.person,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
        // data: action.data
      };
    default:
      return state;
  }
};

export default counter;
