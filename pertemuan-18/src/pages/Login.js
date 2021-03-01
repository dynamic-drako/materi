import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [dataUser, setDataUser] = useState({
    username: "",
    password: "",
  });

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
    const dataLocalStorage = localStorage.getItem("dataUser");
    const data = JSON.parse(dataLocalStorage);
    if (dataUser.userName === data.userName) {
      console.log(data);
      console.log("user ditemukan");
      if (dataUser.password === data.password) {
        console.log("berhasil login");
        history.push("/dashboard");
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Username</label>
        <input
          type="text"
          value={dataUser.username}
          id="username"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          value={dataUser.password}
          id="password"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
