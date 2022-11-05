import React from "react";
import Image from "next/image";
import Add from "../img/add.png";
import Cam from "../img/cam.png";
import More from "../img/more.png";
import Messages from "./messages";
import Input from "./input";

export default function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Taylor</span>
        <div className="chatIcons">
          <Image src={Cam} alt="ChatIcons" />
          <Image src={Add} alt="ChatIcons" />
          <Image src={More} alt="ChatIcons" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}
