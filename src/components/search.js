import React from "react";

export default function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find chat" />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <div className="userChatInfo">
          <span>Light</span>
        </div>
      </div>
    </div>
  );
}