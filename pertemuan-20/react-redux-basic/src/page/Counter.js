import { connect } from "react-redux";
import { addCounter, minusCounter } from "../redux/actions/counter.actions";

function Counter(props) {
  console.log(props);

  return (
    <div>
      <button onClick={() => props.increment({nama: "auzan"})}> + </button>
      <h1>{props.counter}</h1>
      <button onClick={() => props.decrement()}> - </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (person) => dispatch(addCounter(person)),
    decrement: () => dispatch(minusCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);