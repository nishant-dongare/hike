import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const login = () => {};

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hike</span>
        <span className="title">Login</span>
        <form className="form">
          <input className="input" type="email" placeholder="email" />
          <input className="input" type="password" placeholder="password" />
          <input id="file" type="file" style={{ display: "none" }} />
          <button onClick={login}>Login</button>
        </form>
        <Link to="/register">
          <p>New user? Register</p>
        </Link>
      </div>
    </div>
  );
}
