function Header(props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>Name: {props.char}</h2>
      <h2>Age: {props.age}</h2>
      <h2>Angka dari counter: {props.number}</h2>
    </div>
  );
}

export default Header;
