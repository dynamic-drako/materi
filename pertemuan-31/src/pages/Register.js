import { useState } from "react";

function Register() {
  const [register, setRegister] = useState({
    name: "",
    password: "",
  });
  console.log(register);

  const handleChange = (event) => {
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={() => {}}>
        <input
          type="text"
          name="name"
          value={register.name}
          placeholder="Masukan nama anda"
          onChange={(event) => handleChange(event)}
        />

        <input
          type="password"
          name="password"
          value={register.password}
          placeholder="Masukan password anda"
          onChange={(event) => handleChange(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;
