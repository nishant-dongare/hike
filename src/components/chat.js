import React, { useContext } from "react";
import Add from "../img/add.png";
import Cam from "../img/cam.png";
import More from "../img/more.png";
import Messages from "./messages";
import Input from "./input";
import { ChatContext } from "../context/ChatContext";

export default function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="ChatIcons" />
          <img src={Add} alt="ChatIcons" />
          <img src={More} alt="ChatIcons" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}
