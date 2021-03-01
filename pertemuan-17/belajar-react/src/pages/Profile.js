import { useHistory, useParams } from "react-router-dom";

function Profile() {
  let history = useHistory()
  let {name} = useParams()
  console.log("HISTORY", history);
  console.log("PARAMS", name);

  const changePage = () => {
    history.push("/contact")
  }

  return (
    <div>
      <h1>Halaman Profile</h1>
      <h2>{name}</h2>
      <button onClick={changePage}>Contact</button>
      <a href="https://www.youtube.com/">Youtube</a>
    </div>
  );
}

export default Profile;
