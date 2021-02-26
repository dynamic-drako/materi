import React from "react";

function Biodata(props) {
  return (
    <div>
      <h1>{props.name.toUpperCase()}</h1>
      <button onClick={props.changeName}>Change Name to Impact Byte</button>
    </div>
  );
}

export default Biodata;
