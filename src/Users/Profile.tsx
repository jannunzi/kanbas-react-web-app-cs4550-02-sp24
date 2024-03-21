import React, { useState, useEffect } from "react";
import * as userClient from "./client";
import { useNavigate } from "react-router";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const fetchUser = async () => {
    const user = await userClient.profile();
    setUser(user);
  };
  const logout = async () => {
    await userClient.logout();
    navigate("/Kanbas/Account/Login");
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
