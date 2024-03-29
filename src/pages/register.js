import React, { useState } from "react";
import AddAvatar from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db, auth, storage } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [err, seterr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // console.log(res);
      const storageRef = ref(storage, email);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          seterr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (photoURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              email,
              displayName,
              photoURL,
            });
            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
            // alert("Registered Succesfully");
          });
        }
      );
    } catch (error) {
      seterr(true);
      alert(error.code + error.message);
    }
    setLoading(false);
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hike</span>
        <span className="title">Register</span>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="display name"
            required
          />
          <input className="input" type="email" placeholder="email" required />
          <input
            className="input"
            type="password"
            placeholder="password"
            required
          />
          <input id="file" type="file" style={{ display: "none" }} required />
          <label htmlFor="file">
            <img src={AddAvatar} width={40} height={40} alt="damn" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
          {loading && "Uploading the image please wait..."}
          {err && <span style={{ color: "red" }}>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
