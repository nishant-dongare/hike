import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";

export default function Chatlist() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  // useEffect(() => {
  //   const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
  //     //console.log("Current data", doc.data());
  //     setChats(doc.data());
  //   });

  //   return () => {
  //     unsub();
  //   };
  // }, [currentUser.uid]);
  console.log("chats", chats);
  return (
    <div className="chatlist">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            className="userChat"
            key={chat[0]}
            // onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
