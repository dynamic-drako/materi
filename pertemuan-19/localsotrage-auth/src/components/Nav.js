import {Link, useHistory} from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border: 1px solid black;
  background-color: ${props => props.background ? "#f3f3f3" : "gray"}
`

function Nav({isLogin, setIsLogin}) {
  const history = useHistory()

  const handleLogout = () => {
    localStorage.removeItem("isLogin")
    setIsLogin(JSON.parse(localStorage.getItem("isLogin")))
    history.push("/")
  }

  return (
    <Navbar background>
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      {isLogin ? 
      <Link  onClick={handleLogout}>Logout</Link> 
      : 
      <Link to="/login">Login</Link>}
    </Navbar>
  )
}

export default Nav