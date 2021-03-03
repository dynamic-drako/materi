import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border: 1px solid black;
  background-color: ${props => props.background ? "#f3f3f3" : "gray"}
`
// style={{display: 'flex', justifyContent: "space-around", padding: "20px 0"}}

function Nav({isLogin, setIsLogin}) {
  return (
    <Navbar background>
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      {isLogin ? 
      <span  onClick={() => setIsLogin(false)}>Logout</span> 
      : 
      <Link to="/login">Login</Link>}
    </Navbar>
  )
}

export default Nav