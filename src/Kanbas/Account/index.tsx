import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";
import Login from "../../Users/Login";
import Profile from "../../Users/Profile";
import Register from "../../Users/Register";

export default function Account() {
  return (
    <div className="container-fluid">
      <h1>Account</h1>
      <Routes>
        <Route path="/" element={<Navigate to="Register" />} />
        <Route path="Register" element={<Register />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}
