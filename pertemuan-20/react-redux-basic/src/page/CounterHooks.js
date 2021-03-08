import { addCounter, minusCounter } from "../redux/actions/counter.actions";
import { useDispatch, useSelector } from "react-redux";

function CounterHooks() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <button onClick={() => dispatch(addCounter())}> + </button>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(minusCounter())}> - </button>
    </div>
  );
}

export default CounterHooks;
