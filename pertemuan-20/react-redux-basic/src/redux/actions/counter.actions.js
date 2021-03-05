export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const addCounter = (person) => {
  return {
    type: INCREMENT,
    person
  };
};

export const minusCounter = () => {
  return {
    type: DECREMENT,
  };
};