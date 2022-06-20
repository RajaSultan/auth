import React from "react";
import SignUp from "./SignUp";
const SignUpHttp = () => {
  const data = () => {
    console.log("from http");
  };
  async function addUserHandler(user) {
    const response = await fetch(
      "https://react-app-920e6-default-rtdb.firebaseio.com/USERS.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await response.json();
    alert("Successfully Account Created, Please Log in to Continue!");
  }

  return <SignUp onAddUser={data} />;
};

export default SignUpHttp;
