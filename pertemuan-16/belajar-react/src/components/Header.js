function Header(props) {
  return (
    <>
      <h2>Name: {props.char}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

export default Header