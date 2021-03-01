import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>Header</h1>
      <Link to="/dashboard">dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">register</Link>
      <Link to="/gallery">gallery</Link>
    </div>
  );
}

export default Header;
