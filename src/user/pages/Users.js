import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Zack GTAY",
      image:
        "https://cdn.pixabay.com/photo/2015/01/07/20/53/hat-591973_960_720.jpg",

      places: 4,
    },
  ]; // DUMMY DATA
  return <UsersList items={USERS} />;
};

export default Users;
