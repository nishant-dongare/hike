import Image from "next/image";
import React from "react";
import Attach from "../img/attach.png";
import Img from "../img/img.png";

export default function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <Image className="inputIcons" src={Attach} />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <Image className="inputIcons" src={Img} />
        </label>
        <button>send</button>
      </div>
    </div>
  );
}
