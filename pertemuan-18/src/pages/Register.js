import { useState } from "react";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  const [dataUser, setDataUser] = useState({
    username: "",
    email: "",
    password: "",
    nama: "",
  });
  console.log(dataUser);

  const handleChange = (e) => {
    console.log(e);
    console.log(e.target.id);
    console.log(e.target.value);
    setDataUser((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    let patternUsername = /[0-9a-zA-Z]{6,}/;
    if (patternUsername.test(dataUser.username) === true) {
      localStorage.setItem("dataUser", JSON.stringify(dataUser));
      history.push("/login");
    }
  };
  return (
    <div>
      <h1>Register form</h1>
      <form>
        <label>Username</label>
        <input
          type="text"
          value={dataUser.username}
          id="username"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          value={dataUser.email}
          id="email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          value={dataUser.password}
          id="password"
          onChange={handleChange}
        />
        <label>Nama</label>
        <input
          type="text"
          value={dataUser.nama}
          id="nama"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
