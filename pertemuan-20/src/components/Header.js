import React from "react";
import DisplayUsername from "./DisplayUsername";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div style={{ display: "flex" }}>
      <h1>Header</h1>
      <DisplayUsername userName={props.userName} />
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Header;
