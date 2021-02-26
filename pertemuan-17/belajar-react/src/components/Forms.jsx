import React, { useState } from "react";

function Forms() {
  const [nameForm, setNameForm] = useState("tes tes");

  const handleChange = (event) => {
    setNameForm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`halo ${nameForm}`);
  };

  console.log(nameForm);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nameForm} onChange={handleChange} />
        <input type="submit" value="submit" />
      </form>

      <h1>{nameForm}</h1>
    </div>
  );
}

export default Forms;
