import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserValue } from "../context/StateProvider";

const Protected = ({ children }: any) => {
  const navigate = useNavigate();
  const [{ user }] = UserValue();
  console.log(user);
  if (user?.user?.email !== "beresik.ales@gmail.com") {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};

export default Protected;
