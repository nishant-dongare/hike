import { uuidv4 } from "@firebase/util";
import { arrayUnion, doc, Timestamp, updateDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Attach from "../img/attach.png";
import Img from "../img/img.png";

export default function Input() {
  const [text, setText] = useState("");
  // const [img, setImg] = useState("");
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const onSend = async () => {
    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id: uuidv4(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
    });
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <div className="send">
        <img className="inputIcons" src={Attach} alt="damn" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          // onChange={(e) => setImg(e.target.value)}
        />
        <label htmlFor="file">
          <img className="inputIcons" src={Img} alt="damn" />
        </label>
        <button onClick={onSend}>send</button>
      </div>
    </div>
  );
}
