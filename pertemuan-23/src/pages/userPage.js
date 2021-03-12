import React from "react";
import UserList from "../components/UserList";
import UserListHooks from "../components/UserListHooks";

function userPage() {
  return (
    <div>
      <h1>User Page</h1>
      <UserList />
      <UserListHooks />
    </div>
  );
}

export default userPage;
