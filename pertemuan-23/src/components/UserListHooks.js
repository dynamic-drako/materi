import { useContext } from "react";
import { UserContext } from "../contexts/UserContexts";

function UserList() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>User List Hooks</h1>
      <h3>Nama: {user.nama}</h3>
      <h3>Batch: {user.batch}</h3>
    </div>
  );
}

export default UserList;
