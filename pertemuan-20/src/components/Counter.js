import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <div>
      <h1>counter: {props.counter}</h1>
    </div>
  );
}

const mapStateToProps = (props) => {
  return {
    counter: props.counter,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
