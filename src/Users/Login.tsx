import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userClient from "./client";
export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const login = async () => {
    try {
      const newUser = await userClient.loginUser(user);
      navigate("/Kanbas/Account/Profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        value={user.username}
        type="text"
        className="form-control"
        placeholder="Username"
      />
      <input
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        value={user.password}
        type="password"
        className="form-control"
        placeholder="Password"
      />
      <button onClick={login} className="btn btn-primary">
        Login
      </button>
    </div>
  );
}
