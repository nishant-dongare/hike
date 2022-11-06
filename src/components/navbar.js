import { signOut } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">Hike</span>
      <div className="user">
        <img
          className="profile area24"
          src={currentUser.photoURL}
          alt="profile"
        ></img>
        <span>{currentUser.displayName}</span>
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
