import React from "react";
import Attach from "../img/attach.png";
import Img from "../img/img.png";

export default function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img className="inputIcons" src={Attach} alt="damn" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img className="inputIcons" src={Img} alt="damn" />
        </label>
        <button>send</button>
      </div>
    </div>
  );
}
