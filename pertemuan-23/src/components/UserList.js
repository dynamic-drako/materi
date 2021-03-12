import { UserContext } from "../contexts/UserContexts";

function UserList() {
  return (
    // consumer digunakan untuk mengambil data dari provider
    // di dalam bungkus consumer bisa kita beri arrow function lalu yang mau di panggil bisa di destructuring
    <UserContext.Consumer>
      {(userContext) => {
        const { user } = userContext;
        return (
          <div>
            <h1>User List</h1>
            <h3>Nama: {user.nama}</h3>
            <h3>Batch: {user.batch}</h3>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

export default UserList;
