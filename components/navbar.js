import { signOut } from "firebase/auth";
import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Hike</span>
      <div className="user">
        <img
          className="profile area24"
          src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600"
        ></img>
        <span>John</span>
        <button
          onClick={() => {
            signOut(auth);
            <Navigate to="/login" />;
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
