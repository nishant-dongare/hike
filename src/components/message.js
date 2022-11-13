import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();
  const isOwner = message.senderId === currentUser.uid;

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={ref} className={`message ${isOwner && "owner"}`}>
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="profile area40"
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        {message.text && (
          <p
            style={{
              borderRadius: isOwner
                ? "10px 10px 0px 10px"
                : "0px 10px 10px 10px",
            }}
          >
            {message.text}
          </p>
        )}
        {message.img && <img src={message.img} alt={message.img} />}
      </div>
    </div>
  );
};

export default Message;
