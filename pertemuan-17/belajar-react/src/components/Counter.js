function Counter(props) {
  return (
    <div>
      <h1>Counter hooks</h1>
      <button onClick={props.decrease}>-</button>
      <span>{props.number}</span>
      <button onClick={props.increase}>+</button>
    </div>
  );
}

export default Counter;
