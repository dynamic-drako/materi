import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/profile/Alpha">Profile</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;
