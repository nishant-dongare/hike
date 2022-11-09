import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import React from "react";
import { useState, useContext } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const onSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, "=>", doc.data());
        setUser(doc.data());
      });
    } catch (error) {
      setErr(true);
    }
  };

  const onKey = (e) => {
    e.code === "Enter" && onSearch();
  };

  const onSelect = async () => {
    const combineId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    // console.log(currentUser.uid + "\n" + user.uid + "\n" + combineId);

    try {
      const res = await getDoc(doc(db, "chats", combineId));
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combineId), { messages: [] });

        //create user chat
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combineId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combineId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
    }
    setUser(null);
    setUsername("");
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find chat"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={onKey}
          value={username}
        />
      </div>
      {err && <span>User Not Found</span>}

      {user && (
        <div className="userChat" onClick={onSelect}>
          <img src={user.photoURL} alt="DP" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
}
