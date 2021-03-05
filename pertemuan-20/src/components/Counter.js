import React from "react";
import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "../redux/actions/counter.actions";

function Counter(props) {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => props.increaseCounter()}>+</button>
      <h1>{props.counter}</h1>
      <button onClick={() => props.decreaseCounter()}>-</button>
    </div>
  );
}

const mapStateToProps = (props) => {
  console.log(props);
  return {
    counter: props.Counter.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
