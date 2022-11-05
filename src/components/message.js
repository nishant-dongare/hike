import React from "react";

export default function Message() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          className="profile area40"
          src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p id="owner">Hello</p>
        <img
          className="profile area40"
          src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
}
