import {useState} from 'react';
import { useHistory } from 'react-router-dom';

function Login(props) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }
  
  const handleLogin = (e) => {
    e.preventDefault()
    console.log(user);

    props.setIsLogin(true)

    setUser({
      username: "",
      password: ""
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" name="username" value={user.username} onChange={handleChange}/>
        <input type="text" name="password" value={user.password} onChange={handleChange}/>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default Login