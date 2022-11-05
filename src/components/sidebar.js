import React from "react";
import Chatlist from "./chatlist";
import Navbar from "./navbar";
import Search from "./search";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chatlist />
    </div>
  );
}
