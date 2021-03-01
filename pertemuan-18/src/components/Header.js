import { Link } from "react-router-dom";

const style = { 
  display: "flex", 
  justifyContent: "space-around",
  padding: "20px 0"
}

function Header() {
  return (
    <div style={style}>
      {/* <h1>Header</h1> */}
      <Link to="/dashboard">dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">register</Link>
      <Link to="/gallery">gallery</Link>
      <Link to="/todo">todo</Link>
    </div>
  );
}

export default Header;
